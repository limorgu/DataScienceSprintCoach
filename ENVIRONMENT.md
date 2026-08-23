# Data Science Sprint Coach Environment

Use this repository in VS Code or Codex for continuous technical interview practice. The repository supplies public prompts and synthetic data; personal progress stays local.

## Open and start

1. Clone this repository and open its root folder in VS Code.
2. Open the integrated terminal at the repository root.
3. Use the public question catalogs in `.agents/skills/data-science-sprint-coach/question-bank/`.
4. In Codex, start with:

```text
Use @data-science-sprint-coach to continue my practice. Read private-progress first, then the active topic and schema.
```

## SQL with SQLite

The public synthetic SQL kit is in `resources/sql/`.

```bash
sqlite3 resources/sql/users_sessions_practice.sqlite
```

Useful SQLite commands:

```sql
.tables
.schema users
.schema sessions
SELECT * FROM users LIMIT 5;
SELECT * FROM sessions LIMIT 5;
```

Use only the `users` and `sessions` tables for the current SQL exercises. The matching CSVs are `resources/sql/users.csv` and `resources/sql/sessions.csv`; load them into another SQL editor only when you prefer that environment.

## Topic practice

Open the relevant public catalog:

- `sql/questions.md`
- `python/questions.md`
- `ml/questions.md`
- `statistics/questions.md`
- `llm/questions.md`
- `design/questions.md`
- `case/questions.md`
- `communication/questions.md`

The catalogs are public resources only. They do not state what you have completed or what comes next.

## Private continuity and 9pm record

Keep actual answers, covered questions, scores, next question, sprint plan, and daily notes in your own local `private-progress/`. It is gitignored. A different learner's installation keeps a separate local folder; do not copy, commit, or share progress between learners.

At **9pm**, the dedicated progress agent updates:

- `private-progress/sprint-session-state.yaml`;
- `private-progress/sprint-plan.md`;
- `private-progress/daily/YYYY-MM-DD.md`.

Never commit `private-progress/`. For job discovery, applications, and networking, use the separate [JobSearchCoach](https://github.com/limorgu/JobSearchCoach) repository.
