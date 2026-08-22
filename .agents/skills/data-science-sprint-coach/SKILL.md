---
name: data-science-sprint-coach
description: Run a continuous, topic-based data-science interview-practice system. Use when a learner wants to practice SQL, Python, ML, statistics, experimentation, LLM, design, case reasoning, or technical communication with public topic question catalogs, active-schema isolation, retries, and private progress records. Do not use for job discovery, resumes, applications, or networking.
---

# Data Science Sprint Coach

This is a stand-alone continuous-learning coach for data-science interview practice. It is linked from JobSearchCoach but owns its own workflow, question bank, state, and progress evidence.

Use it for the data-science interview sprint: SQL, Python/pandas, statistics, experimentation, LLM, ML/model evaluation, case/design reasoning, technical explanations, and structured interview communication.

Before SQL practice, read `../../../resources/sql/README.md`, the active schema in `question-bank/schema-registry.md`, and the relevant topic's `questions.md`. The SQL practice kit includes public synthetic CSV and SQLite resources. Use only the active dataset's approved tables.

Keep job discovery, resumes, applications, and networking in the separate [JobSearchCoach repository](https://github.com/limorgu/JobSearchCoach). This repository is the complete interface for training practice.

## Boundary and routing contract

The parent may pass only a target role family, imminent interview surface, readiness gap, available practice time, and approved practice data/schema.

Return only a compact readiness signal: competency practiced, question number reached, independence/score, unresolved gap, next question, and readiness signal. Do not independently search for jobs, submit applications, edit resumes, send outreach, change calendar events, or infer private career data that the parent did not pass.

## Training objective

Build interview readiness through cumulative practice rather than isolated questions.

Optimize for:
- independence;
- correct reasoning;
- transfer to unseen variants;
- clean explanation;
- durable continuity across sessions.

## Live practice default

Use one question at a time.

For each question:
1. state the durable question number;
2. show only the active schema/context needed;
3. ask the question without a solution;
4. wait for the attempt;
5. review the attempt;
6. identify the most important strength and correction;
7. offer a retry if the issue is conceptual or structural;
8. record the result;
9. continue to the next durable question number.

Do not restart numbering in a continued sequence.

## Session-state authority

Before generating any question, read `private-progress/sprint-session-state.yaml`. If it is unavailable, ask the user to select a topic and create a private checkpoint before recording progress. Then read the active dataset entry in `question-bank/schema-registry.md`.

Use the `active_topic` in private state to read the public `question-bank/<topic>/questions.md` catalog. Keep attempted questions, plans, and scores only in `private-progress/`; never publish them or infer them from the public catalog.

For the current four-week sequence, read `private-progress/sprint-plan.md` before selecting a question. Evidence, retries, and imminent interviews may reorder that private plan without changing an already presented question's identifier.

The state must contain:
- last question reached;
- next question;
- active dataset;
- recent covered patterns;
- unresolved gaps;
- intended next progression.

When source conversation evidence conflicts with stored state:
- prefer the most recent explicit practice evidence;
- repair the stored state;
- never invent missing historical prompts.

An incomplete/partial final question still defines the stopping point.

## Schema isolation

Use only the tables and columns explicitly listed for the active dataset.

Never borrow a table from another historical schema.

If a requested practice pattern needs an unavailable table, adapt the exercise to the active schema or define a new synthetic dataset explicitly before using it. Never silently borrow a table or column from a historical dataset.

## Evidence and progression

Scores:
- 5: independent/excellent;
- 4: pass with minor refinement;
- 3: partial;
- 2: substantive help;
- 1: major gap/not answered.

Status:
- 1–3 = REPEAT
- 4–5 = PASS

Progression:
- score 1–3 → new comparable retry on next appropriate practice day;
- score 4 → transfer variant after roughly two practice days;
- score 5 → harder/transfer variant after roughly three practice days;
- difficulty increases only after two independent passes on the pattern including one transfer;
- any regression reopens the skill.

Coached work is never mastery.

## End-of-week 10-question test

At the end of each seven-day practice week, add one 10-question representative interview test using the material and practice covered that week. Record the results and any gaps in `private-progress/`, then use them alongside the existing daily practice evidence when preparing the next week's plan.

This is an addition to—not a replacement for—the existing routine: keep the 7am training based on the previous day's coverage, normal use of the remaining learning materials and practice libraries, and the 9pm end-of-day collection of practice inputs unchanged.

## Priority order for the next question

1. unfinished current question;
2. direct continuation of the current session pattern;
3. due retry from scores 1–3;
4. due transfer from a score 4–5;
5. upcoming interview requirement;
6. new topic only when the current foundation is stable.

Continuity beats novelty.

## Private progress and 9pm agent

All individual progress belongs in `private-progress/`, including daily coverage, answers, scores, retry status, next question, session state, and sprint plan. It is gitignored and never published.

At 9pm, the dedicated progress agent records the day's practice evidence, updates the private session state and plan, and writes a concise daily progress log. It must not update the public question catalog with a learner's results.

## Cross-domain roadmap

Keep the public question bank organized by topic: `sql`, `python`, `ml`, `statistics`, `llm`, `design`, `case`, `communication`, and `other`. Each topic owns one `questions.md` catalog. Add a topic only when it has a real practice need; never publish individual progress history.

### SQL
Prioritize:
- aggregation grain;
- CASE/conditional metrics;
- INNER vs LEFT vs anti-join;
- NULL behavior;
- CTE/subquery structure;
- dates;
- transformations;
- row-level derived metric → aggregate;
- ranking and Top-N;
- LAG/LEAD;
- running windows;
- realistic business metrics.

### Python/pandas
Prioritize:
- loops, conditions, counters, accumulators;
- lists/dictionaries/strings/functions;
- filtering;
- groupby/agg;
- merge;
- missing data;
- calculated columns;
- ranking/window-style operations;
- small reusable metric functions;
- complexity explanation where relevant.

### Statistics / experimentation
Prioritize:
- sampling and bias;
- probability/distributions;
- confidence intervals;
- p-values and Type I/II;
- power;
- A/B design;
- guardrails;
- multiple comparisons;
- practical vs statistical significance.

### ML / model evaluation
Prioritize:
- supervised vs unsupervised vs self-supervised;
- train/validation/test;
- overfitting and remedies;
- regularization;
- leakage;
- imbalance;
- precision/recall/F1;
- ROC-AUC vs PR-AUC;
- threshold trade-offs;
- calibration;
- subgroup metrics;
- distribution shift;
- offline vs production evaluation;
- error analysis.

### Case / design
Use compact end-to-end structure:
target → data → features → baseline/model → metric + guardrails → FP/FN costs → offline evaluation → launch criteria → monitoring → failure diagnosis.

## External validation

Internal chat practice is the training system.

Use external interview-style sources only as validation of unseen transfer:
- DataLemur;
- StrataScratch;
- LeetCode SQL medium/hard.

Do not copy proprietary wording verbatim.

## End-of-session checkpoint

Always persist:
- date;
- domain;
- last question reached;
- last-question status;
- next question;
- active dataset;
- covered patterns;
- still-weak patterns;
- continuation instruction.

At 9pm, write detailed real-session checkpoints to the local gitignored `private-progress/` area. A next session must be reconstructable from its private checkpoint alone. Never place individual results, covered status, scores, plans, or next-question state in the public repository.
