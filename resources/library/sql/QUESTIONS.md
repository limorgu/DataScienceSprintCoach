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

## Response metrics, CTEs, and windows

- Count responses and average latency by model version; sort the result by average latency.
- Return total safe responses and safety rate in one result, with an explicit denominator.
- Compute safety rate by model version and identify the lowest-volume model before ranking it.
- Use a CTE to calculate total response count, safe count, and unsafe count by language.
- Compare a segment safety rate to an overall safety-rate benchmark with a one-row CTE.
- Use `CROSS JOIN` to attach a global benchmark to every segment row; explain why the result has that grain.
- Return every response with model-average latency and the difference from that average.
- Return only responses whose latency is more than 1.5 times their model average.
- Rank the three slowest responses within each model version using `RANK()` and explain tied ranks.
- Return exactly three slowest responses per model version using `ROW_NUMBER()` and deterministic tie-breaking.
- Compare `RANK`, `DENSE_RANK`, and `ROW_NUMBER` on tied latency values.
- Use `LAG` to show the previous response latency within each model version ordered by response time.
- Calculate latency change from the prior response and flag increases above a stated threshold.
- Calculate a running average latency by model version ordered by event time.
- Calculate a rolling five-response average latency and compare it with the full-model average.
- Return the first and last response timestamp for each model version and the elapsed span.
- Find the response with the largest absolute deviation from its model-average latency.
- Calculate a percentile or quantile-style latency threshold by model and identify values above it.
- Calculate a cumulative safe-response count and cumulative safety rate over time.
- Detect three consecutive responses above a model's rolling-latency baseline.

## Sessions, joins, and activity grain

- Count sessions by channel and return each session alongside its channel total using a window function.
- Number sessions within each channel ordered by newest session first.
- Show the prior session ID for each user and explain why partitioning by channel instead would change the question.
- Return each user's session count and rank users by that count with `DENSE_RANK`.
- Return the top three users per channel by session count with deterministic tie-breaking.
- Find users with sessions in more than one channel and calculate channel diversity.
- Find users with no sessions using `LEFT JOIN`; preserve each user's plan and country.
- Compare `COUNT(*)`, `COUNT(session_id)`, and `COUNT(DISTINCT session_id)` after a user-to-session join.
- Identify sessions with no matching user and explain whether they should be retained or quarantined.
- Identify users with duplicate session records under an explicit duplicate definition.
- Build a one-row-per-user activity table with first session, last session, total sessions, and completed sessions.
- Calculate days from signup to first session, preserving users who never started a session.
- Bucket first-session delay into same day, 1–7 days, 8–30 days, and no session.
- Calculate session completion rate by channel, plan type, and country with zero-denominator protection.
- Calculate the share of channel traffic represented by each plan type.
- Identify channel switches between consecutive sessions for each user.
- Calculate time between consecutive sessions and flag long inactivity gaps.
- Return the most-used channel per user, resolving ties consistently.
- Build a monthly active-user table and calculate month-over-month change with `LAG`.
- Build a date spine that retains months with no sessions before calculating the trend.

## Data quality, experiments, and decision metrics

- Use `CASE` to standardize raw channel values before calculating volume and completion metrics.
- Use `COALESCE` to label missing dimension values without turning missing facts into completed events.
- Find events whose timestamps precede a user's signup date and quantify the affected share.
- Diagnose an inflated metric caused by a many-to-many join and rewrite it at the intended grain.
- Explain when a filter belongs in `WHERE`, `HAVING`, or an outer query after a window function.
- Build a treatment/control table with assigned users, observed users, conversion, quality, safety, latency, and cost.
- Check sample-ratio mismatch against a planned allocation before reading conversion lift.

The 100 prompts in this catalog are public practice prompts only. Exact answers, scores, covered status, and the next selected question remain in local `private-progress/`.
