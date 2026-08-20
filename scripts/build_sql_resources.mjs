import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

const root = process.env.SPRINT_RESOURCE_ROOT ?? path.resolve(import.meta.dirname, "..");
const resourceDir = path.join(root, "resources", "sql");

const users = [
  ["U001", "2026-01-03", "free", "en", "US", "25-34"],
  ["U002", "2026-01-05", "pro", "en", "US", "35-44"],
  ["U003", "2026-01-12", "pro", "es", "MX", "25-34"],
  ["U004", "2026-01-16", "free", "fr", "CA", "18-24"],
  ["U005", "2026-01-21", "team", "en", "GB", "35-44"],
  ["U006", "2026-02-02", "free", "en", "US", "25-34"],
  ["U007", "2026-02-04", "pro", "de", "DE", "45-54"],
  ["U008", "2026-02-11", "team", "en", "US", "35-44"],
  ["U009", "2026-02-18", "free", "pt", "BR", "25-34"],
  ["U010", "2026-02-25", "pro", "en", "CA", "25-34"],
  ["U011", "2026-03-03", "free", "en", "US", "18-24"],
  ["U012", "2026-03-06", "team", "es", "ES", "35-44"],
  ["U013", "2026-03-12", "pro", "en", "GB", "45-54"],
  ["U014", "2026-03-16", "free", "en", "US", "25-34"],
  ["U015", "2026-03-23", "pro", "fr", "CA", "35-44"],
  ["U016", "2026-04-01", "team", "en", "US", "25-34"],
  ["U017", "2026-04-05", "free", "de", "DE", "18-24"],
  ["U018", "2026-04-09", "pro", "en", "US", "45-54"],
  ["U019", "2026-04-18", "free", "pt", "BR", "25-34"],
  ["U020", "2026-04-25", "team", "en", "GB", "35-44"],
];

const sessions = [
  ["S001", "U001", "2026-01-03 09:15:00", "web", "onboarding", "completed"],
  ["S002", "U001", "2026-01-05 10:10:00", "mobile", "search", "completed"],
  ["S003", "U002", "2026-01-06 08:30:00", "web", "onboarding", "completed"],
  ["S004", "U002", "2026-01-11 13:20:00", "web", "analysis", "abandoned"],
  ["S005", "U002", "2026-02-02 11:05:00", "api", "export", "completed"],
  ["S006", "U003", "2026-01-15 14:40:00", "mobile", "onboarding", "completed"],
  ["S007", "U003", "2026-01-20 09:00:00", "web", "search", "completed"],
  ["S008", "U004", "2026-01-16 17:25:00", "web", "onboarding", "abandoned"],
  ["S009", "U005", "2026-01-29 12:15:00", "api", "export", "completed"],
  ["S010", "U005", "2026-02-01 12:30:00", "api", "analysis", "completed"],
  ["S011", "U006", "2026-02-10 08:10:00", "web", "onboarding", "completed"],
  ["S012", "U006", "2026-02-12 08:45:00", "mobile", "search", "completed"],
  ["S013", "U007", "2026-02-04 16:00:00", "web", "onboarding", "completed"],
  ["S014", "U007", "2026-02-05 10:00:00", "web", "analysis", "completed"],
  ["S015", "U008", "2026-02-19 11:30:00", "api", "export", "abandoned"],
  ["S016", "U008", "2026-02-21 15:45:00", "web", "search", "completed"],
  ["S017", "U009", "2026-02-25 09:20:00", "mobile", "onboarding", "completed"],
  ["S018", "U010", "2026-03-04 13:10:00", "web", "onboarding", "completed"],
  ["S019", "U010", "2026-03-10 09:50:00", "web", "analysis", "completed"],
  ["S020", "U011", "2026-03-03 10:05:00", "mobile", "onboarding", "abandoned"],
  ["S021", "U012", "2026-03-08 08:40:00", "web", "onboarding", "completed"],
  ["S022", "U012", "2026-03-13 14:00:00", "api", "export", "completed"],
  ["S023", "U013", "2026-03-20 12:00:00", "web", "search", "completed"],
  ["S024", "U013", "2026-03-22 12:20:00", "mobile", "analysis", "completed"],
  ["S025", "U014", "2026-03-25 09:10:00", "web", "onboarding", "completed"],
  ["S026", "U015", "2026-04-05 15:15:00", "mobile", "onboarding", "completed"],
  ["S027", "U015", "2026-04-08 17:30:00", "web", "search", "abandoned"],
  ["S028", "U016", "2026-04-01 08:00:00", "api", "onboarding", "completed"],
  ["S029", "U016", "2026-04-02 08:30:00", "api", "export", "completed"],
  ["S030", "U016", "2026-04-15 09:00:00", "web", "analysis", "completed"],
  ["S031", "U018", "2026-04-12 10:30:00", "web", "onboarding", "completed"],
  ["S032", "U018", "2026-04-19 10:45:00", "mobile", "search", "completed"],
  ["S033", "U019", "2026-04-28 11:00:00", "mobile", "onboarding", "abandoned"],
];

const headers = {
  users: ["user_id", "signup_date", "plan_type", "language", "country", "age_group"],
  sessions: ["session_id", "user_id", "session_start", "channel", "topic", "end_status"],
};
const csv = (header, rows) => [header, ...rows].map((row) => row.join(",")).join("\n") + "\n";
const sqlLiteral = (value) => `'${String(value).replaceAll("'", "''")}'`;

await fs.mkdir(resourceDir, { recursive: true });
await fs.writeFile(path.join(resourceDir, "users.csv"), csv(headers.users, users));
await fs.writeFile(path.join(resourceDir, "sessions.csv"), csv(headers.sessions, sessions));

const sql = [
  "-- Synthetic practice dataset. Safe to publish and reset.",
  "DROP TABLE IF EXISTS sessions;",
  "DROP TABLE IF EXISTS users;",
  "CREATE TABLE users (user_id TEXT PRIMARY KEY, signup_date TEXT NOT NULL, plan_type TEXT NOT NULL, language TEXT NOT NULL, country TEXT NOT NULL, age_group TEXT NOT NULL);",
  "CREATE TABLE sessions (session_id TEXT PRIMARY KEY, user_id TEXT NOT NULL, session_start TEXT NOT NULL, channel TEXT NOT NULL, topic TEXT NOT NULL, end_status TEXT NOT NULL, FOREIGN KEY (user_id) REFERENCES users(user_id));",
  ...users.map((row) => `INSERT INTO users VALUES (${row.map(sqlLiteral).join(", ")});`),
  ...sessions.map((row) => `INSERT INTO sessions VALUES (${row.map(sqlLiteral).join(", ")});`),
].join("\n") + "\n";
const sqlPath = path.join(resourceDir, "users_sessions_practice.sql");
const dbPath = path.join(resourceDir, "users_sessions_practice.sqlite");
await fs.writeFile(sqlPath, sql);
await fs.rm(dbPath, { force: true });
await new Promise((resolve, reject) => {
  const process = spawn("/usr/bin/sqlite3", [dbPath]);
  let stderr = "";
  process.stderr.on("data", (chunk) => { stderr += chunk; });
  process.on("error", reject);
  process.on("close", (code) => code === 0 ? resolve() : reject(new Error(stderr)));
  process.stdin.end(sql);
});

console.log(JSON.stringify({ users: users.length, sessions: sessions.length, resourceDir }));
