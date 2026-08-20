# SQL Practice Setup

Use this setup only for the SQL practice track.

1. Open the DataScienceSprintCoach repository in VS Code.
2. Open the integrated terminal at the repository root.
3. Open the public SQLite practice database:

```bash
sqlite3 resources/sql/users_sessions_practice.sqlite
```

4. Inspect the active schema before writing a query:

```sql
.tables
.schema users
.schema sessions
```

Use only the `users` and `sessions` tables for this SQL kit. The matching CSVs are in `resources/sql/`.
