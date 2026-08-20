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

For the topic prompts, use [questions.md](questions.md) and the complete [30-day SQL bank](../sprint-30-day-question-bank.md#sql).
