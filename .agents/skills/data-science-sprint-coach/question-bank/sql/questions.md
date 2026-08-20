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
