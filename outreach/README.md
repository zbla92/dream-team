# outreach/

Cold email templates for NoAgency. English. Targeted at Series A/B startup CTOs, VPE, and founders in the EU/US/UK.

This folder is **templates + rules only**. The Python sender script (Gmail API, Jinja2 rendering, Google Sheets pipeline, follow-up sequencing) lives in `outreach/sender/` in the next round.

---

## The 4-touch sequence

| Touch | Day | Template | Stop condition |
|-------|-----|----------|----------------|
| 1 | 0 | `templates/initial_*.md` (pick one based on signal) | Any reply |
| 2 | +4 | `templates/followup_1_bump.md` | Any reply |
| 3 | +10 | `templates/followup_2_value.md` | Any reply |
| 4 | +21 | `templates/breakup.md` | — |

**Stop immediately on any reply** (including out-of-office). Resume only if they ask you to follow up.

---

## Which `initial_*` to pick

| Signal (within last 30 days) | Template |
|------------------------------|----------|
| Funding round announced (Series A/B) | `initial_post_funding.md` |
| Open senior eng role for 60+ days | `initial_hiring_signal.md` |
| You've used / read about their product, no other signal | `initial_generic.md` |
| You have a referral or warm context | edit `initial_generic.md`, drop the agency-pain line |
| You're sure they've been burned by an agency (e.g. they said so publicly) | `initial_agency_pain.md` — sparingly |

If there's no real signal, **don't send**. The whole sequence relies on the first sentence being specific.

---

## Hard rules per sender

- **Daily cap:** 15 sent / sender / day. No exceptions.
- **Hours:** 09:00 – 18:00 recipient-local. No weekends. No public holidays.
- **Inbox warmup:** new Google Workspace inbox does 2–3 weeks of warmup before cold sends. Use a tool like mailwarm/lemwarm or send 5–10 real emails to known contacts daily.
- **DNS:** SPF, DKIM, DMARC must all pass before the first cold send. Verify with [mail-tester.com](https://www.mail-tester.com/) — score 9/10 minimum.
- **One sequence per recipient.** If a colleague already mailed them, don't double-up.

---

## GDPR / CAN-SPAM — non-negotiable

Every cold email must contain, in this order:

1. **Identity:** sender name + brand + physical postal address.
2. **Purpose:** clearly a business pitch, no impersonation, no fake "RE:" subjects.
3. **Opt-out:** one plain English line. Reply "unsubscribe" must work. We log it and never write to that address again.

We **only** mail business addresses (`firstname@company.com`). Never personal addresses. Never scraped lists from data brokers. Sources we use: Crunchbase, LinkedIn, Sifted, Dealroom, EU-Startups, public funding announcements, the company's own careers page.

If you can't justify the "legitimate interest" under GDPR (B2B, relevant offer, business address, opt-out present), **don't send**.

---

## Variable definitions

All templates use `{{double_brace}}` placeholders. Render with Jinja2 (or any equivalent) before sending.

| Variable | Example | Source |
|----------|---------|--------|
| `{{first_name}}` | "Hans" | Manual research (LinkedIn) |
| `{{company}}` | "Acme Health" | Crunchbase / company site |
| `{{funding_round}}` | "Series A" or "$12M Series B" | Crunchbase / press release |
| `{{funding_date_phrase}}` | "last month" or "in October" | Compute from announcement date |
| `{{role_signal}}` | "Senior Backend Engineer" | Their careers page |
| `{{role_open_weeks}}` | "9 weeks" | Manual check on listing date |
| `{{product_observation}}` | "the new analytics view" | You actually used the product |
| `{{relevant_case_study_url}}` | `https://noagency.dev/work/coop-finance` | Pick the closest one |
| `{{relevant_case_study_label}}` | "a Swiss fintech app we built" | Short phrase for the link |
| `{{sender_name}}` | "Milan Blaz" | Whoever is sending |
| `{{sender_first_name}}` | "Milan" | |
| `{{sender_slug}}` | "milan" | Lowercase, used in `/pitch?sender=…` |
| `{{sender_phone}}` | "+387 …" | |
| `{{sender_email}}` | "milan@noagency.dev" | |
| `{{brand}}` | "NoAgency" | Constant — `NoAgency` |
| `{{site_url}}` | `https://noagency.dev` | Constant |
| `{{physical_address}}` | "Sarajevo, BiH — [street + number]" | **Real** address — required by GDPR |

---

## Subject line patterns that work

- Specific. Lowercase OK. Never use fake `RE:` or `FWD:`.
- Mention them, not us: `"acme just raised — quick eng question"` beats `"NoAgency intro"`.
- Under 60 chars so it doesn't truncate on mobile.
- One subject per template. Don't A/B without a real volume to A/B with.

---

## When the user replies

| Reply type | Action |
|------------|--------|
| Interested → wants a call | Move to CRM. Stop the sequence. Book the call. |
| "Not now, ask again in Q3" | Snooze in CRM. Don't send anything for 60 days. |
| "Not interested" / "remove me" / "unsubscribe" | Mark as opt-out. Add to suppression list. **Never email again.** |
| Bounce | Mark email invalid. Don't retry. |
| Out of office | Hold the sequence. Resume 2 business days after their return date if no further reply. |

---

## What this folder will become

Next round adds:

```
outreach/
├── README.md                ← this file
├── templates/               ← markdown templates (already here)
├── sender/                  ← Python script (Gmail API + Sheets + Jinja2)
│   ├── main.py
│   ├── gmail_client.py
│   ├── sheets_client.py
│   ├── config.py
│   └── ...
└── pipeline/
    └── sheets-template.csv  ← Google Sheets column structure
```

Until that exists, send manually using these templates as the source of truth. Don't drift the copy in your sent folder — edit the templates here and reuse.
