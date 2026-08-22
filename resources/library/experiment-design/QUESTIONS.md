# Experiment Design Questions

For every prompt, state the product decision, causal hypothesis, experiment unit, primary metric, guardrails, key validity threat, and decision rule. These are the applied experiment-design questions from the Sprint—not general statistics definitions.

## Framing the decision and hypothesis

1. Turn “improve recommendations” into a testable causal hypothesis.
2. Choose the decision that an experiment should unlock before choosing a metric.
3. Define the treatment, control, target population, and eligibility rules for a ranking change.
4. Explain why a clear null hypothesis does not guarantee a useful product test.
5. Decide whether the primary outcome should be a rate, count, duration, or value metric.
6. Separate a mechanism metric from a business outcome metric.
7. Design a hypothesis for reducing response latency without degrading answer quality.
8. Define success for a workflow where both completion and safety matter.
9. Choose the appropriate experiment when a change affects both new and returning users.
10. Explain when an observational study is preferable to randomization.
11. Identify a decision that cannot be answered with an A/B test alone.
12. Explain why the team should predefine what happens for a small positive result.
13. Define a target population when only a subset of users can see the treatment.
14. Choose whether to test a feature, model, policy, or end-to-end workflow.
15. Explain how to make a vague stakeholder goal measurable without narrowing it incorrectly.
16. State a primary hypothesis and two plausible unintended effects for a new prompt.
17. Define the counterfactual for a model-quality improvement.
18. Explain why “engagement” needs a precise event definition.
19. Choose a metric that reflects durable value rather than a superficial click.
20. Describe a hypothesis that requires measuring downstream human work, not only immediate user behavior.

## Assignment, randomization, and exposure

21. Choose user-level, session-level, account-level, or request-level randomization for a recommendation test.
22. Explain why session-level assignment can contaminate a persistent user experience.
23. Design an assignment method for a feature shared by teams or households.
24. Explain how network effects violate independent-treatment assumptions.
25. Define exposure when assigned users may never encounter the changed experience.
26. Separate assignment, exposure, adoption, and outcome in an analysis plan.
27. Design a holdout for a model that learns from user feedback.
28. Explain when cluster randomization is necessary.
29. Identify a carryover risk in a crossover experiment.
30. Define a randomization key that prevents a user from switching variants.
31. Explain why post-treatment filtering can bias an experiment.
32. Design eligibility rules that avoid selecting users based on future behavior.
33. Diagnose a sample-ratio mismatch and list the first checks.
34. Explain why an assignment table must be retained for valid analysis.
35. Design a method to check that treatment and control are balanced before reading outcomes.
36. Explain how bot traffic or duplicate accounts can corrupt assignment.
37. Choose whether to exclude internal traffic before or after randomization.
38. Define how a rollback changes the intention-to-treat analysis.
39. Explain why users who receive both experiences should not be casually dropped.
40. Design a gradual exposure plan that preserves a clean comparison.

## Metrics and guardrails

41. Define a primary metric for a change intended to improve successful task completion.
42. Choose guardrails for quality, latency, cost, and safety.
43. Explain the numerator and denominator for conversion when users can make multiple attempts.
44. Decide whether average latency or a tail latency percentile is the right guardrail.
45. Define a metric for answer quality when human review is delayed.
46. Explain why a rate can change because its denominator changed.
47. Design a guardrail for unnecessary refusals in an AI-assisted workflow.
48. Choose a metric that prevents a ranking change from increasing low-quality clicks.
49. Explain why revenue per assigned user can differ from revenue per exposed user.
50. Define a metric hierarchy when leadership wants one top-line result.
51. Decide how to handle zero-inflated outcome data.
52. Explain the trade-off between a sensitive early metric and a slow but meaningful outcome.
53. Define a quality-adjusted completion metric.
54. Explain why choosing metrics after seeing results is risky.
55. Identify a metric that might improve when the product experience gets worse.
56. Design a dashboard that shows treatment effect, sample size, and guardrail status together.
57. Explain how to measure a feature that affects a small but high-value segment.
58. Define a severity-weighted harm metric as an experiment guardrail.
59. Choose a metric threshold for a non-inferiority decision.
60. Explain why a statistically precise metric can still be the wrong decision metric.

## Power, duration, and statistical decisions

61. List the inputs that drive required sample size for a two-arm experiment.
62. Explain minimum detectable effect in the context of a launch decision.
63. Choose a test duration when behavior varies by day of week.
64. Explain why stopping after the first significant result inflates false positives.
65. Design a pre-specified sequential-testing plan.
66. Explain the difference between statistical significance and practical significance.
67. Interpret a confidence interval that includes both a meaningful loss and a small gain.
68. Decide whether a non-significant result supports “no effect.”
69. Explain why low power makes subgroup conclusions unreliable.
70. Define a stopping rule for a severe guardrail regression.
71. Choose between superiority, non-inferiority, and equivalence framing.
72. Explain how baseline variance changes experiment duration.
73. Design a plan when the desired effect is too small to measure quickly.
74. Explain why repeated metric checks require an analysis policy.
75. Decide when variance reduction is valid and how to validate it.
76. Explain why an outlier treatment rule should be fixed before analysis.
77. Define the result that would justify continuing a pilot rather than launching.
78. Interpret an effect estimate with a wide confidence interval and a positive point estimate.
79. Explain why p-values cannot answer the probability that the treatment is beneficial.
80. Present an experiment result with effect size, uncertainty, and decision implication.

## Validity, analysis, and segmentation

81. Identify selection bias in an analysis restricted to users who clicked.
82. Explain how attrition can bias treatment-control comparisons.
83. Design a missing-data investigation for an outcome event.
84. Explain why multiple testing creates false discoveries across many metrics.
85. Choose which segments to pre-register and why.
86. Investigate an average lift that is negative for one critical segment.
87. Explain why a treatment can appear successful due to seasonality.
88. Design a difference-in-differences study when randomization is unavailable.
89. State the parallel-trends evidence you would require before trusting that study.
90. Explain how a logging change can mimic a product effect.
91. Validate the SQL used to calculate experiment assignment and conversion.
92. Diagnose a many-to-many join that inflates experiment outcomes.
93. Explain why `COUNT(*)` after a LEFT JOIN may be wrong for active-user metrics.
94. Design an intention-to-treat and a treatment-on-the-treated analysis, and explain the difference.
95. Explain when Simpson’s paradox can reverse an aggregate conclusion.
96. Decide how to treat users with incomplete exposure data.
97. Define a sensitivity analysis for an assumption that affects the result.
98. Explain why a post-launch holdout can reveal effects missed in a short test.
99. Write the recommendation for a mixed result: positive primary metric, uncertain quality guardrail, and weak segment evidence.
100. Present a final launch, iterate, or stop decision with evidence, risks, and the next measurement.
