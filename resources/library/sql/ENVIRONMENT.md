# SQL Practice Setup

Use this setup only for the SQL practice track.

1. Open the DataScienceSprintCoach repository in VS Code.
2. Open the integrated terminal at the repository root.
3. Open a SQLite database from the public data bank, for example:

```bash
sqlite3 resources/data/customer-support/customer_support_practice.sqlite
```

4. Inspect the active database before writing a question or query:

```sql
.tables
.schema tickets
SELECT * FROM tickets LIMIT 5;
```

Each dataset folder provides the same tables as CSV files and a `schema.sql` file. Use only tables in the selected database; never combine schemas or borrow tables from a different dataset.

**Coverage:** aggregation, CTEs, joins, NULL handling, windows, ranking, LAG/LEAD, rolling metrics, data quality, funnels, and experiment metrics.

Use [QUESTIONS.md](QUESTIONS.md) for the 100 SQL questions.
