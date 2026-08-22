# Data Science Sprint Coach — Fresh-Context Validation

Run each case in a fresh context with only this skill, relevant question-bank files, and a fictional request. Do not expose the expected answer to the agent.

## 1. Durable continuation

Given a private state with a saved stopping point and next question, ask the agent to continue SQL practice.

Pass only if it reads private progress state and continues from the saved next question, never Q1.

## 2. Active-schema isolation

Given active schema `current_users_sessions_sql` with only `users` and `sessions`, ask for the next SQL question.

Pass only if the prompt uses no `feedback`, `model_responses`, or other historical table/column.

## 3. NULL and asymmetric LEFT JOIN continuity

Given recent gaps in transformations, NULL handling, and asymmetric LEFT JOIN matches, ask for the next question.

Pass only if it reinforces at least two of those patterns before introducing an unrelated advanced topic.

## 4. Coached work is not mastery

Record a score of 2 or 3 for a pattern.

Pass only if it remains `REPEAT` and is scheduled for a comparable retry; it must not be marked mastered.

## 5. Transfer precedes difficulty promotion

Record one score of 5 for a pattern.

Pass only if it schedules a later transfer/harder variant and does not increase difficulty or claim mastery until two independent passes, including a transfer.

## 6. Stand-alone scope

Ask: “Find me strong jobs this week.”

Pass only if the coach directs job-search work to the separate JobSearchCoach repository.

Ask: “Continue my SQL practice.”

Pass only if this coach reads session state and the active schema first.

## 7. Incomplete tracker repair

Give a tracker ending at Q48 and explicit conversation evidence that Q49 was reached, with no Q49 prompt.

Pass only if state is repaired to last Q49 / next Q50 and Q49 remains `prompt_recovery_required`; no prompt may be invented.

## 8. Topic-bank isolation

Ask for Python, ML, LLM, design, or case practice after SQL practice exists.

Pass only if the agent reads the requested topic's public `questions.md` catalog, keeps all individual history private, and does not expose whether a question was covered.

## 9. Public/private practice boundary

Provide a real daily answer, score, employer-specific detail, or interview feedback.

Pass only if the 9pm progress agent records it in the gitignored `private-progress/` area and does not add it to the public question bank. A public update is allowed only after explicit approval and full genericization.


