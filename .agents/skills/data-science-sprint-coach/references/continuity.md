# Private continuity protocol

Use this reference when a private practice agent should learn from prior sessions or a prior-day dashboard while keeping learner-specific progress outside the public repository.

## Separation of responsibilities

The public skill defines curriculum, scoring, progression, and coaching behavior. A private continuity store defines the learner's current state and chronological evidence.

Never publish individual scores, question history, next-question state, private document locations, or personal dashboards in this repository.

## Read → decide → write

For every practice-planning or practice-review run:

1. **Read current state** from the private continuity store supplied to the agent.
2. **Read the latest practice history/dashboard evidence**, plus any due retries.
3. **Decide the next work** using the public progression rules.
4. **Write one concise practice outcome record** after the run.
5. **Refresh current state** with the exact stopping point and next action.

If private continuity is unavailable, do not guess the prior stopping point or mastery state.

## Planning from the previous day

The next daily practice plan should be evidence-driven rather than calendar-driven.

Prioritize in this order:
1. unfinished current question;
2. weak or failed patterns from the latest evidence;
3. retries that are due under the scoring rules;
4. transfer variants for recently passed patterns;
5. imminent interview requirements;
6. new topics only when the current foundation is stable.

A previous-day dashboard is an input to today's plan, not merely a report artifact.

## Required private history fields

A private practice history record should be able to preserve:
- date;
- domain;
- question or question range;
- completion status;
- score or independence signal;
- patterns covered;
- weak/failed patterns;
- hints or coaching required;
- gate/readiness status;
- exact stopping point;
- exact next question/topic;
- brief evidence/dashboard note.

## Current state

Keep a compact current-state record with:
- active domain/topic;
- current gate/readiness;
- last question reached;
- next question;
- unresolved gaps;
- due retries/transfers;
- short recent evidence summary.

The chronological history explains *why* the state is what it is; the current-state row tells the next run *where to start*.

## Conflict resolution

When stored state conflicts with newer explicit practice evidence, prefer the newer evidence and repair the private state. Never rewrite public question catalogs to encode one learner's progress.

## Privacy contract

The private agent may know how to locate its continuity store through private configuration. This public skill must never contain that identifier or path.
