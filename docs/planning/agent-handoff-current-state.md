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

- No standard planning docs existed when this handoff file was created.

## Standard safety boundaries

- Do not read, copy, print, or sync secrets.
- Do not open or expose `.env`, `auth.json`, tokens, credentials, private keys, browser profiles, or `secrets/` folders.
- Do not access personal folders such as Desktop, Documents, Downloads, browser profiles, or personal cloud folders unless Avner explicitly approves the exact path.
- Do not run destructive commands.
- Do not change Docker, services, firewall, LAN exposure, Git push/deploy, or scheduled jobs without explicit approval.
- Before changing files, inspect current project status and existing diffs.
- After any meaningful work, update this handoff file plus `project-status.md` and `decision-log.md` where relevant.

## Agent switch protocol

When a new agent takes over:

1. Read this file.
2. Read `docs/planning/project-status.md` if it exists.
3. Read `docs/planning/decision-log.md` if it exists.
4. Check current filesystem/git state before editing.
5. Confirm the next safe step with Avner if it has side effects.
6. Record what changed before handing off again.

## Last handoff note

Created/standardized by Hermes so AVAGENTOS, BUDDY, `cheapworker`, or future agents can resume from a known file instead of depending only on chat context.
