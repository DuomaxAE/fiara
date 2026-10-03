    CREATE TABLE IF NOT EXISTS custom_gifting_requests (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      occasion TEXT NOT NULL,
      product TEXT NOT NULL,
      notes TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    