# FIARA Creations — storefront

Express + PostgreSQL site. Browsing and basket happen on the site; **orders and payments are handled entirely on WhatsApp**.

## How ordering works

- Customers add items to the basket and tap **Order on WhatsApp**. Their basket (items, quantities, subtotal) opens as a pre-filled WhatsApp message to the business number.
- Delivery details, final price and payment are agreed in that chat.
- The site does not take payments or store orders.

## What the backend stores

Only enquiries: corporate gifting, custom-gifting requests and newsletter sign-ups (PostgreSQL). Tables are created on startup; `schema.sql` has the same SQL.

## Environment variables

```text
DATABASE_URL=
WHATSAPP_NUMBER=918595949626
```

`WHATSAPP_NUMBER` is digits only, with country code. If unset, the built-in default above is used.

## Local run

Requires Node.js 20+ and PostgreSQL.

```bash
npm install
npm start
```

Open `http://localhost:10000`.

## Deploy on Render

`render.yaml` defines one Node web service and one PostgreSQL database, with a health check at `/health`. Deploy the Blueprint; no payment keys are needed.

## Deploy with Docker

```bash
docker build -t fiara-creations .
docker run --env-file .env -p 10000:10000 fiara-creations
```

## API surface

```text
GET  /health
GET  /api/config
POST /api/leads/corporate
POST /api/leads/custom
POST /api/leads/newsletter
```
