# steadfast-home-buyers
Steadfast Home Buyers — two-stage survey with weighted lead events.
Forked from Jenkins Homebuyers two-step pattern. Next.js 16, Tailwind v4, shadcn/ui.

Accepted property types: single-family, multi-family, mobile-home.
Disqualified: condo-townhouse, land, other.

Stage 1 → `LeadEarly` (track only)
Stage 2 → `Lead` ($250/$125/$50 by score) OR `LeadLowIntent` (soft-fail)

Env vars: see `.env.example`. Webhook routing supports
`WEBHOOK_URL_EARLY` / `WEBHOOK_URL_COMPLETE` (falls back to single `WEBHOOK_URL`).
