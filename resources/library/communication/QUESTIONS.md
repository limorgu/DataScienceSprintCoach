# Technical Communication Questions

These are spoken interview prompts based on the technical work in this Sprint: SQL metrics, evaluation, experimentation, human data, AI quality, and product decisions. Give an evidence-based answer, not a generic communication lesson.

## Evaluation, quality, and human data

- Explain how you would decide whether an AI-assisted system is ready to expand when there is no single ground-truth label.
- Define “quality” for a system that has helpfulness, safety, latency, cost, and user-trust trade-offs.
- A human-labeling project has low agreement. Explain the investigation sequence before changing the model.
- Explain how you would build a rubric that makes evaluator judgments reproducible.
- Present an error-analysis result where the overall metric is acceptable but one important segment is not.
- Explain why a higher offline score does not automatically justify launch.
- Give a two-minute explanation of precision, recall, false-negative cost, and the threshold decision for a safety-sensitive workflow.
- Explain how you would distinguish a model problem, a data-quality problem, and a measurement problem.
- Present a recommendation when quality improves but latency and cost worsen.
- Explain the difference between a valid metric, a reliable metric, and a useful decision metric.

## SQL, data, and analytical reasoning aloud

- Narrate a query that calculates total responses and average latency by model version; state the row grain before writing SQL.
- Explain the numerator and denominator for a safety rate, including what would make the metric misleading.
- Explain why a `CROSS JOIN` to a one-row benchmark can be correct and when it would be dangerous.
- Talk through a `LAG` query that compares a response with the prior response; justify the partition and ordering fields.
- Explain the difference between `RANK`, `DENSE_RANK`, and `ROW_NUMBER` using a top-three latency request.
- A stakeholder asks why a `LIMIT 3` query is not enough for “top three per model.” Explain clearly.
- Explain how a LEFT JOIN can preserve users without activity and why `COUNT(*)` can then mislead.
- Present a data-quality finding caused by a many-to-many join and explain the correction.
- Explain a daily trend, rolling average, and prior-period comparison without overstating normal variation.
- Give a concise recommendation after an experiment shows positive average lift but uncertain subgroup results.

## Experiment, model, and launch decisions

- Explain an A/B test design for a recommendation or ranking change: unit, primary metric, guardrails, and stop conditions.
- Explain sample-ratio mismatch to a non-technical partner and state what happens next.
- Present a rollback recommendation when an offline metric improves but a customer outcome declines.
- Explain the difference between statistical significance and practical significance for a launch decision.
- Explain why peeking, multiple comparisons, and selective subgroup reporting can lead to a bad decision.
- Defend a baseline model before proposing a more complex model.
- Explain why time-aware validation is necessary for a forecasting problem.
- Present a calibration problem to a product partner who only knows that model accuracy looks high.
- Explain the monitoring plan for data drift, concept drift, latency, and delayed outcomes after launch.
- Describe the evidence needed to move from a pilot to a broader rollout.

## Experience and stakeholder communication

- Tell the story of a difficult technical project using the problem, your decision, evidence, measurable outcome, and what you changed afterward.
- Describe a time you turned an ambiguous stakeholder request into a measurable evaluation plan.
- Explain how you would influence a cross-functional group when data contradicts a strongly held assumption.
- Describe how you communicate uncertainty without sounding indecisive.
- Give a 60-second executive summary of an analysis: recommendation, evidence, risk, and next action.
- Give the same summary to a technical partner, including assumptions, data grain, and validation checks.
- Explain how you protect confidential details while still giving a convincing example of your work.
- Respond to: “Your metric is wrong—why should we trust this analysis?”
- Respond to: “Why did you choose this model instead of a simpler one?”
- End an answer by naming the decision you want the interviewer or stakeholder to make.
