# Data Science Sprint Coach

A stand-alone, continuous-learning coach for data-science interview practice.

It presents a public catalog of questions by topic. Personal practice history, daily coverage, scores, and next steps remain in a separate private progress folder.

## Start

Open this repository in Codex and say:

```text
Use @data-science-sprint-coach to continue my interview practice. Read the current session state, active schema, and active topic before asking the next question.
```

For VS Code, SQLite, CSV resources, and the 9pm private progress workflow, read [ENVIRONMENT.md](ENVIRONMENT.md).

## What it covers

- SQL
- Python/pandas
- ML and model evaluation
- statistics and experimentation
- LLM
- system/design reasoning
- case interviews
- technical communication

Every topic has one public `questions.md` catalog. It never shows what an individual has covered, will cover next, or scored.

## Included practice resources

The repository includes a public synthetic [SQL practice kit](resources/sql/README.md): `users.csv`, `sessions.csv`, a SQLite setup script, and a ready-to-query SQLite database. It is designed for the SQL catalog's joins, NULL handling, aggregation, date, ranking, and window-function prompts.

## How a session works

1. Read the private progress checkpoint.
2. Read only the active topic and active schema.
3. Ask one durable, numbered question.
4. Review the attempt, identify the key correction, and offer a retry when useful.
5. At 9pm, the dedicated progress agent saves the day's result, next question, and progression signal to private progress.

Question numbering never resets during a continued sequence. The coach never borrows a table or column from a historical schema: it uses only the active schema.

## Public and private data

The tracked question bank contains only topic-organized reusable questions and synthetic schemas. Real daily answers, scores, interview feedback, employer details, coverage status, and private links belong in the local gitignored `private-progress/` folder.

## Connection to JobSearchCoach

This coach is independent. It may receive only an interview surface, readiness gap, available time, or approved practice schema from [JobSearchCoach](https://github.com/limorgu/JobSearchCoach). It returns only a compact readiness signal and never searches for jobs, edits resumes, applies, or manages networking.

## Repository map

```text
.agents/skills/data-science-sprint-coach/
├── SKILL.md
├── agents/openai.yaml
└── question-bank/
    ├── schema-registry.md
    └── {sql,python,ml,statistics,llm,design,case,communication,other}/
        └── questions.md

private-progress/  # local only; excluded from Git

tests/training-continuity.md
```

Read [the skill instructions](.agents/skills/data-science-sprint-coach/SKILL.md), [the question bank](.agents/skills/data-science-sprint-coach/question-bank/), and [the continuity test](tests/training-continuity.md).
