import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import pg from 'pg';
import path from 'path';
import { fileURLToPath } from 'url';

const { Pool } = pg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('trust proxy', 1);

const PORT = Number(process.env.PORT || 10000);
const DATABASE_URL = process.env.DATABASE_URL;
const WHATSAPP_NUMBER = (process.env.WHATSAPP_NUMBER || '918595949626').replace(/\D/g, '');

if (!DATABASE_URL) console.warn('DATABASE_URL is not set. Database-backed features will not work.');

const pool = DATABASE_URL
  ? new Pool({
      connectionString: DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      max: Number(process.env.PG_POOL_MAX || 8),
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000
    })
  : null;

function nowIso() {
  return new Date().toISOString();
}
function sanitizeText(value, max = 500) {
  return String(value ?? '').trim().slice(0, max);
}
function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function validPhone(value) {
  return /^[0-9+\-\s()]{7,20}$/.test(value);
}
function requireDb(res) {
  if (!pool) {
    res.status(503).json({ error: 'Database is not configured on the server.' });
    return false;
  }
  return true;
}
async function ensureSchema() {
  if (!pool) return;
  await pool.query(`
    CREATE TABLE IF NOT EXISTS corporate_enquiries (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      company TEXT,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      gift_count TEXT,
      budget TEXT,
      occasion TEXT,
      message TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS custom_gifting_requests (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      occasion TEXT NOT NULL,
      product TEXT NOT NULL,
      notes TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id BIGSERIAL PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

  `);
}

app.get('/health', (_req, res) => res.json({ ok: true, time: nowIso() }));

app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false, limit: '100kb' }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 120,
  standardHeaders: 'draft-8',
  legacyHeaders: false
});
app.use('/api', apiLimiter);

app.get('/api/config', (_req, res) => {
  res.json({ whatsappNumber: WHATSAPP_NUMBER || null });
});

app.post('/api/leads/corporate', async (req, res) => {
  if (!requireDb(res)) return;
  const name = sanitizeText(req.body?.name, 120);
  const company = sanitizeText(req.body?.company, 160);
  const email = sanitizeText(req.body?.email, 180).toLowerCase();
  const phone = sanitizeText(req.body?.phone, 40);
  const giftCount = sanitizeText(req.body?.count, 80);
  const budget = sanitizeText(req.body?.budget, 80);
  const occasion = sanitizeText(req.body?.occasion, 160);
  const message = sanitizeText(req.body?.message, 1500);
  if (!name || !validEmail(email) || !validPhone(phone)) {
    return res.status(400).json({ error: 'Please enter a valid name, email and phone number.' });
  }
  await pool.query(
    `INSERT INTO corporate_enquiries(name, company, email, phone, gift_count, budget, occasion, message)
     VALUES($1,$2,$3,$4,$5,$6,$7,$8)`,
    [name, company || null, email, phone, giftCount || null, budget || null, occasion || null, message || null]
  );
  res.status(201).json({ ok: true });
});

app.post('/api/leads/custom', async (req, res) => {
  if (!requireDb(res)) return;
  const name = sanitizeText(req.body?.name, 120);
  const occasion = sanitizeText(req.body?.occasion, 160);
  const product = sanitizeText(req.body?.product, 200);
  const notes = sanitizeText(req.body?.notes, 1500);
  if (!name || !occasion || !product) return res.status(400).json({ error: 'Please complete the required fields.' });
  await pool.query(
    `INSERT INTO custom_gifting_requests(name, occasion, product, notes) VALUES($1,$2,$3,$4)`,
    [name, occasion, product, notes || null]
  );
  res.status(201).json({ ok: true });
});

app.post('/api/leads/newsletter', async (req, res) => {
  if (!requireDb(res)) return;
  const email = sanitizeText(req.body?.email, 180).toLowerCase();
  if (!validEmail(email)) return res.status(400).json({ error: 'Please enter a valid email address.' });
  await pool.query(
    `INSERT INTO newsletter_subscribers(email) VALUES($1) ON CONFLICT(email) DO NOTHING`,
    [email]
  );
  res.status(201).json({ ok: true });
});

// Static site
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api/') && req.path !== '/health') {
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
  return next();
});

async function start() {
  try {
    await ensureSchema();
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`FIARA server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Startup error:', error);
    process.exit(1);
  }
}

start();
