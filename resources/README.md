# Practice Resources

> For the VS Code and SQLite workflow, start with [SQL Practice Setup](../.agents/skills/data-science-sprint-coach/question-bank/sql/SETUP.md).

## Complete synthetic data bank

[`data/`](data/) is the complete public practice-data bank used by the 30-day sprint. It provides three self-contained SQLite databases and CSV exports of every table:

- [`ai-quality-safety/`](data/ai-quality-safety/) — 13 tables for model quality, safety, experiments, labeling, retrieval, and answer evaluation.
- [`customer-support/`](data/customer-support/) — 6 tables for tickets, customers, events, predictions, experiments, and CSAT.
- [`streaming-analytics/`](data/streaming-analytics/) — 6 tables for users, titles, impressions, streams, subscriptions, and experiments.

Each dataset folder includes its SQLite database, a `schema.sql` file, and one CSV per table. All data is synthetic. There are no Excel files and no learner results in this repository.

These are public, synthetic practice resources. They contain no personal answers, employer material, or progress history.

## SQL users + sessions kit

[`sql/`](sql/) contains the same dataset in three usable forms:

- `users.csv` and `sessions.csv` — load into any SQL environment.
- `users_sessions_practice.sql` — SQLite-compatible table creation and inserts.
- `users_sessions_practice.sqlite` — ready-to-query SQLite database.

The active SQL catalog uses only `users` and `sessions`. Users without sessions are deliberately present, so LEFT JOIN and NULL-handling questions are meaningful.
