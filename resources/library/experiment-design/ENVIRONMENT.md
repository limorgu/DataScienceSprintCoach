# Experiment Design Environment and Metadata

- **Practice type:** causal questions, A/B-test design, metric design, SQL analysis, and rollout decisions.
- **Resources:** the public synthetic [`streaming-analytics`](../../data/streaming-analytics/) and [`customer-support`](../../data/customer-support/) SQLite databases and CSV tables. Use Python/pandas for simulation or validation when useful.
- **Data grain:** inspect the selected dataset's `schema.sql` before writing a query. Specify the experiment unit, assignment unit, and outcome grain before computing metrics.
- **Coverage:** hypotheses, treatment assignment, sample-size drivers, primary and guardrail metrics, sample-ratio mismatch, bias, sequential analysis, segmentation, and rollout.

Personal attempts, feedback, scores, company context, and coverage status belong only in `private-progress/`.
