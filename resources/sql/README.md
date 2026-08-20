# users + sessions SQL Practice Kit

> Start with the repository [environment guide](../../ENVIRONMENT.md) for the VS Code, Codex, and SQLite workflow.

This synthetic dataset supports joins, NULL handling, activation metrics, aggregation grain, windows, ranking, and date transformations.

## Load it

```bash
sqlite3 users_sessions_practice.sqlite
```

Or create a fresh database:

```bash
sqlite3 users_sessions_practice.sqlite < users_sessions_practice.sql
```

Use [`../../.agents/skills/data-science-sprint-coach/question-bank/sql/questions.md`](../../.agents/skills/data-science-sprint-coach/question-bank/sql/questions.md) for prompts and [`../../.agents/skills/data-science-sprint-coach/question-bank/schema-registry.md`](../../.agents/skills/data-science-sprint-coach/question-bank/schema-registry.md) for the allowed schema.
