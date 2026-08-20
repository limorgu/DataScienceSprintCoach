# Covered SQL — Verified Practice History

This archive contains only practice that can be supported by the available tracker/history.

It is intentionally incomplete where the source evidence is incomplete.

## Verified numbered questions

### Q14 — Aggregate sessions per user + DENSE_RANK
Status: REPEAT
Main gap: aggregation grain vs window partition; ranking all users should not partition by the value being ranked.

### Q15 — Top 3 active users per country
Status: REPEAT
Main gap: window result cannot be filtered in the same query-level WHERE; use ranked CTE/subquery then outer filter.

### Q16 — Previous channel with LAG
Status: REPEAT
Main gap: partition by user, order by sequence, and lag the channel value rather than the session id.

### Q17 — Detect channel changes
Status: REPEAT
Main gap: compare current channel to previous channel; exclude first-row NULL.

### Q18 — Running sessions by plan type
Status: PASS
Strength: correct running COUNT window.
Refinement: explicit ROWS frame.

### Q34 — Anti-join: selected cases with no labeling job
Status: REPEAT
Main gap: INNER JOIN removes unmatched rows; anti-join requires LEFT JOIN then right-key IS NULL.

### Q36 — Recall by model + previous-version change with LAG
Status: PASS
Strength: raw rows → model aggregation → metric → LAG.
Refinement: final alias/syntax precision.

### Q44 — Extract month + monthly session count
Status: REPEAT
Main gap: one-row-per-month GROUP BY grain cannot also return arbitrary session-level columns.

### Q45 — Days from signup to session
Status: PASS
Strength: join + date difference.
Refinement: avoid relying on SELECT alias in WHERE for portable interview SQL.

### Q46 — Convert risk tier to numeric score + aggregate
Status: REPEAT
Strength: CASE mapping idea.
Main gap: first derive at row grain, then aggregate from the derived CTE.

### Q47 — Severity score + weighted incident impact
Status: REPEAT
Main gap: define severity score, create row-level weighted impact, then aggregate from the CTE containing that metric.

### Q48 — Monthly model safety trend + LAG
Status: PASS
Strength: month/model aggregation → safety metric → LAG → change.
Refinement: year-month instead of month alone.

### Q49 — stopping point confirmed by user
Status: HISTORICAL PROMPT MISSING
The user explicitly confirmed Q49 was the final question of the prior session.

The current tracker omitted Q49.

Do not invent its prompt. Recover it from the source conversation if available.

## Verified unnumbered / number-not-reliably-known items

### Top 2 model versions by safety rate within country
Status: PASS
Strength: multi-table join, country+model aggregation, DENSE_RANK per country, outer top-2 filter.
Refinement: rank direction; decimal division; minimum-volume condition; choose ROW_NUMBER when exactly N rows are required.

## Recurring SQL patterns already practiced

- GROUP BY and aggregation
- AVG / COUNT
- CASE and conditional metrics
- CTEs
- INNER JOIN
- LEFT JOIN / anti-join
- ranking per group
- ROW_NUMBER / RANK / DENSE_RANK
- LAG
- running windows
- date extraction and date difference
- transformations to numeric scores
- NULL safeguards
- derived row-level metrics
- aggregate → metric → prior-period comparison
- output-grain reasoning
