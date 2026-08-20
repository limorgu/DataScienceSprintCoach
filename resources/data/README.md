# Complete Synthetic Practice Data Bank

This is the full public dataset bank for the Data Science Sprint Coach. Every dataset is synthetic and is available both as a ready-to-query SQLite database and as individual CSV tables.

| Dataset | SQLite database | Tables |
| --- | --- | --- |
| [AI Quality & Safety](ai-quality-safety/) | `ai_quality_safety_interview.sqlite` | users, sessions, model responses, labels, incidents, experiments, sampling, labeling, retrieval, and answer evaluation |
| [Customer Support](customer-support/) | `customer_support_practice.sqlite` | customers, tickets, ticket events, model predictions, experiments, and CSAT |
| [Streaming Analytics](streaming-analytics/) | `streaming_analytics_practice.sqlite` | users, titles, impressions, streams, subscriptions, and experiments |

## Use with SQLite

```bash
sqlite3 resources/data/customer-support/customer_support_practice.sqlite
```

Use `.tables` to see the tables and `.schema <table>` to inspect one table. `schema.sql` is also available in every dataset folder.

## Use as CSV

Open or load the individual `*.csv` files from the relevant dataset folder. Keep joins within a dataset unless a prompt explicitly asks for a conceptual transfer; schemas must never be combined silently.

This bank contains practice data only. Answers, scores, covered questions, and next questions belong only in local `private-progress/`.
