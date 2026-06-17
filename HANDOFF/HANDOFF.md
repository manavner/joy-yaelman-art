# HANDOFF — joy-yaelman-art

Last updated: 2026-05-31T14:04:03Z
Project path: `/opt/data/users/avner-1532243300/projects/joy-yaelman-art`

## Purpose

This file is the standard agent handoff for this project. Every incoming agent must read this file before making changes.

## Required start protocol for the next agent

1. Start with **review**: read this file, inspect the repository/project state, and identify the current phase.
2. Continue with **diagnosis**: understand likely failure points, blockers, stale assumptions, and safety constraints before editing files.
3. Check git status if this is a git repository.
4. Only after review + diagnosis, make scoped changes.

## Required stop protocol when an agent is stuck

If an agent is stuck for too long, it must stop and update this handoff instead of continuing indefinitely. The update must include:

- what was tried;
- what failed or is unclear;
- current repo/project state;
- files changed or investigated;
- open questions/blockers;
- recommended next diagnostic steps;
- commands/checks already run.

## Agent concurrency rule

Do not run two agents in this same project folder at the same time. Parallel work is allowed only when each agent uses a separate git worktree or another explicitly isolated copy.

## Current known state

- Standard `HANDOFF/HANDOFF.md` was created from the workspace-wide handoff rule.
- Legacy planning/status files may still exist under `docs/planning/`; treat those as historical/context files unless this project is migrated fully.
- Do not include secrets in this file.

## Legacy handoff excerpt

Source: `docs/planning/agent-handoff-current-state.md`

```text
# Agent Handoff — Current State

Project: `joy-yaelman-art`
Last updated: 2026-05-24T11:24:30Z
Purpose: stable handoff file so any future agent can resume this project without relying only on chat history.

## Quick status

- Phase: unknown / not yet summarized
- Status: unknown / not yet summarized

## What this file is for

Use this file as the first stop when switching between agents, computers, or sessions.
It should answer:

- What project is this?
- What is the current phase/status?
- What was decided?
- What is the next safe step?
- What must not be touched without explicit user approval?

## Current summary

Not summarized yet.

## Next safe step / next gate

Not documented yet. Next agent should inspect `project-status.md`, `decision-log.md`, and recent git/files before acting.

## Blockers / needed user input

None documented yet.

## Source-of-truth planning files

- No standa
...
```

## Related local context files

- Legacy handoff: `docs/planning/agent-handoff-current-state.md`
- Project status: `not found`
- Decision log: `not found`
- Open questions: `not found`

## Handoff update template

```text
=== HANDOFF_START ===
Project: joy-yaelman-art
Repository path: /opt/data/users/avner-1532243300/projects/joy-yaelman-art
Current branch:
Git status:
Current phase/status:
What I read:
What I tried:
What changed:
What failed / blocker:
Diagnosis:
Important files:
Next safe step:
Do not do:
Open questions:
Commands/checks run:
=== HANDOFF_END ===
```
