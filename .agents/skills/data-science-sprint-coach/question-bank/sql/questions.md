# SQL Question Catalog

Use these prompts as a topic catalog. This file intentionally does not show a learner's completion status, scores, or next question.

## Foundations and windows

- Aggregate sessions per user and rank the users by session count.
- Return the top active users per country.
- Show each session's previous channel with `LAG`.
- Detect channel changes between consecutive sessions.
- Produce a running session count by plan type.
- Find rows with no related record using an anti-join.
- Compute a model metric and compare it with its prior version using `LAG`.
- Extract month and calculate monthly session count.
- Calculate days from signup to session.
- Transform a risk tier into a numeric score, then aggregate it.
- Create a severity score and aggregate weighted incident impact.
- Calculate a monthly trend and prior-period change.

## Activation and retention

- Return every user, first session date, days to first session, and a no-session-safe engagement status.
- Count users with and without a session by plan type.
- Return each user's first-session channel while preserving users without a session.
- Bucket days to first session and calculate counts and percentages.
- Calculate country-level activation within seven days of signup.
- Calculate activation by plan type with a minimum-volume filter.
- Compare monthly signups with monthly first sessions.
- Identify countries above the overall no-session rate.
- Calculate prior-month activation rate by country.
- Rank countries by activation improvement within each month.
- Flag activation regression with a volume guardrail.
- Return an exact top three countries per month with deterministic tie-breaking.
- Identify unusually late first sessions against a country benchmark.

## Session behavior

- Transform completion status and calculate completion rate by channel.
- Find channels with no completed sessions.
- Return user-level session and channel diversity, including zero-session users.
- Return one most-used channel per user with deterministic tie-breaking.
- Show previous session channel for every session.
- Count channel switches per user.
- Show running session number per user.
- Calculate monthly cumulative activated users.

## Query construction and data quality

- Explain the difference between `WHERE`, `HAVING`, and `QUALIFY` using a cohort metric.
- Find duplicate session identifiers and choose a safe deduplication rule.
- Compare `COUNT(*)`, `COUNT(column)`, and `COUNT(DISTINCT column)` on a LEFT JOIN.
- Write a safe conditional rate that avoids integer division and zero denominators.
- Show users whose session timestamps precede signup and quantify the anomaly.
- Standardize channels with `CASE` before calculating a metric.
- Use `COALESCE` without accidentally converting a missing fact into a real value.
- Build a reusable date spine for a monthly report with missing months retained.
- Explain CTE versus subquery trade-offs for readability and debugging.
- Diagnose an inflated count caused by a many-to-many join.

## Advanced windows and business metrics

- Calculate each user's time between consecutive sessions.
- Return each user's first and last session with one row per user.
- Calculate seven-day retention by signup cohort.
- Calculate weekly active users and week-over-week change.
- Identify reactivated users after a 30-day inactivity gap.
- Build a funnel from signup to first session to completed session.
- Rank plans by activation rate with a minimum denominator.
- Calculate percentile-based session activity within country.
- Compare a user's session count to the average for their plan type.
- Use a recursive CTE or date spine to fill missing reporting periods.
