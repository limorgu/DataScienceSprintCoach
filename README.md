# Data Science Sprint Coach

A stand-alone, continuous-learning coach for data-science interview practice.

It keeps question history, future questions, topic progress, and schema rules separate so every practice session starts at the right point and builds on verified evidence.

## Start

Open this repository in Codex and say:

```text
Use @data-science-sprint-coach to continue my interview practice. Read the current session state, active schema, and active topic before asking the next question.
```

## What it covers

- SQL
- Python/pandas
- ML and model evaluation
- statistics and experimentation
- LLM
- system/design reasoning
- case interviews
- technical communication

Every topic has separate `covered/` and `future/` folders. Completed evidence is never confused with a planned question.

## How a session works

1. Read the private checkpoint when available, otherwise the public-safe session state.
2. Read only the active topic and active schema.
3. Ask one durable, numbered question.
4. Review the attempt, identify the key correction, and offer a retry when useful.
5. Save the next question and progression signal.

Question numbering never resets during a continued sequence. The coach never borrows a table or column from a historical schema: it uses only the active schema.

## Public and private data

The tracked question bank contains only genericized questions, synthetic schemas, and public-safe progress evidence. Real daily answers, scores, interview feedback, employer details, and private links belong in the local gitignored `private-practice/` folder.

## Connection to JobSearchCoach

This coach is independent. It may receive only an interview surface, readiness gap, available time, or approved practice schema from [JobSearchCoach](https://github.com/limorgu/JobSearchCoach). It returns only a compact readiness signal and never searches for jobs, edits resumes, applies, or manages networking.

## Repository map

```text
.agents/skills/data-science-sprint-coach/
├── SKILL.md
├── agents/openai.yaml
└── question-bank/
    ├── session-state.yaml
    ├── schema-registry.md
    ├── data-science-sprint-plan.md
    └── {sql,python,ml,statistics,llm,design,case,communication,other}/
        ├── covered/
        └── future/

tests/training-continuity.md
```

Read [the skill instructions](.agents/skills/data-science-sprint-coach/SKILL.md), [the question bank](.agents/skills/data-science-sprint-coach/question-bank/), and [the continuity test](tests/training-continuity.md).
