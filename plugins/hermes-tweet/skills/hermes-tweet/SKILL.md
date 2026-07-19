---
name: hermes-tweet
description: Use Xquik from Hermes Agent for X research, monitoring, and approval-gated actions. Not affiliated with X Corp.
allowed-tools:
  - tweet_explore
  - tweet_read
  - tweet_action
version: 0.1.8
license: MIT
compatibility: Requires Hermes Agent plugin support and Xquik API access.
---

# Hermes Tweet

Use Hermes Tweet when the user needs X/Twitter research, monitoring, or an
explicitly approved account action through Xquik.

## Workflow

1. Use `tweet_explore` to find a catalog-listed endpoint.
2. Use `tweet_read` for public read-only endpoints.
3. Before `tweet_action`, state the endpoint, payload, account, and side effects.
4. Ask for explicit approval before any account-changing action.

## Runtime Requirements

- Install with `hermes plugins install Xquik-dev/hermes-tweet --enable`.
- Configure `XQUIK_API_KEY` in that runtime environment.
- Leave `HERMES_TWEET_ENABLE_ACTIONS` unset or false unless needed.
- Run `hermes plugins list` and `hermes tools list` to verify installation.

## Safety

- Never request or reveal API keys, signing keys, cookies, passwords, or TOTP
  secrets in chat.
- Do not place credentials in tool arguments, markdown, examples, or generated
  files.
- If credentials are missing, ask the user to configure them in the Hermes Agent
  runtime environment.
- Never guess endpoints or create direct HTTP fallbacks.
