# Training Question Bank

This folder is owned by the data-science training sprint leaf.

## Topic folders

Each topic owns separate `covered/` and `future/` folders:

- `sql/`
- `python/`
- `ml/`
- `statistics/`
- `llm/`
- `design/`
- `case/`
- `communication/`
- `other/`

`covered/` contains only verified practice evidence. `future/` contains planned questions that have not yet been completed. A topic may have an empty `covered/` folder when no verified history exists.

## Public bank and private practice log

This tracked question bank is public-safe: retain only synthetic schemas, genericized question history, and planned questions. Do not place a person's daily answers, scores, interview details, transcripts, employer names, or private links here.

Record each real practice session in the local, gitignored `private-practice/` directory using `private-session-template.md`. Promote an item into a topic's `covered/` folder only after removing personal details and only when a genericized record is useful to the public skill.
- `session-state.yaml` — durable continuation state.
- `schema-registry.md` — dataset isolation rules and sanitized schemas.
- `data-science-sprint-plan.md` — the next four weeks of planned topic work.

## Rules

- Once a question is presented, keep its number stable.
- Never renumber a continuation back to Q1.
- Do not call a prompt “covered” unless there is evidence it was attempted.
- If only the stopping number is known, preserve the number and label the prompt missing.
- A future question becomes covered only after it is attempted.
- Keep solutions separate from questions when possible.
- Keep daily practice results private unless the user explicitly approves a sanitized public summary.
