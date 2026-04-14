CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('ADMIN', 'USER')),
  password TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS config (
  id INTEGER PRIMARY KEY DEFAULT 1,
  current_season INTEGER NOT NULL DEFAULT 1
);

INSERT INTO config (id, current_season)
VALUES (1, 1)
ON CONFLICT (id) DO NOTHING;

CREATE TABLE IF NOT EXISTS seasons (
  id SERIAL PRIMARY KEY,
  year INTEGER NOT NULL,
  season INTEGER NOT NULL,
  winner TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(year, season)
);

CREATE TABLE IF NOT EXISTS teams (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  season_id INTEGER REFERENCES seasons(id) ON DELETE CASCADE,
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS team_members (
  team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  PRIMARY KEY (team_id, user_id)
);

CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  date TIMESTAMPTZ NOT NULL,
  winner TEXT,
  season_id INTEGER REFERENCES seasons(id) ON DELETE CASCADE,
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS scores (
  id SERIAL PRIMARY KEY,
  team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE,
  event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  season_id INTEGER REFERENCES seasons(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(team_id, event_id)
);

CREATE VIEW leaderboard AS
SELECT
  s.id AS season_id,
  t.id AS team_id,
  t.name AS team_name,
  COALESCE(SUM(sc.score), 0) AS total_score
FROM seasons s
LEFT JOIN teams t ON t.season_id = s.id
LEFT JOIN scores sc ON sc.team_id = t.id AND sc.season_id = s.id
GROUP BY s.id, t.id, t.name;
