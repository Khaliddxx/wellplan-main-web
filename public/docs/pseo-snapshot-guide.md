# PSEO WellPlan Snapshot Documentation

**Location ID:** `F10cu0x7H1aWCsp2VUkp`  
**Generated:** February 5, 2026

---

## What's Already Created (via API)

### ✅ Custom Values (12 total)

| Name | Field Key | Default Value |
|------|-----------|---------------|
| PARTNER - Domain | `{{ custom_values.partner__domain }}` | *Set per partner* |
| PARTNER - Company Name | `{{ custom_values.partner__company_name }}` | *Set per partner* |
| PARTNER - Email | `{{ custom_values.partner__email }}` | *Set per partner* |
| PARTNER - Phone | `{{ custom_values.partner__phone }}` | *Set per partner* |
| PARTNER - Logo URL | `{{ custom_values.partner__logo_url }}` | *Set per partner* |
| AGENCY - Name | `{{ custom_values.agency__name }}` | PSEO |
| AGENCY - Domain | `{{ custom_values.agency__domain }}` | pseo.nl |
| AGENCY - Email | `{{ custom_values.agency__email }}` | *Set per agency* |
| DISCOVERY - Calendar URL | `{{ custom_values.discovery__calendar_url }}` | Auto-linked |
| STRATEGY - Calendar URL | `{{ custom_values.strategy__calendar_url }}` | Auto-linked |
| FOLLOWUP - Calendar URL | `{{ custom_values.followup__calendar_url }}` | Auto-linked |
| ONBOARDING - Form URL | `{{ custom_values.onboarding__form_url }}` | *Link after creating form* |

### ✅ Calendars (3 total)

| Calendar | ID | Slug | Duration | Color |
|----------|----|----|----------|-------|
| PSEO - Discovery Call | `dfhxk0s3meU3oP3Pe9TO` | `/discovery-call` | 30 min | Blue #214CE5 |
| PSEO - Strategy Call | `yuSaIHueYHwmaxEvub2n` | `/strategy-call` | 45 min | Green #10B981 |
| PSEO - Follow-up Call | `Tw5rNo4QlfZ2yusYbfNA` | `/followup-call` | 30 min | Orange #F59E0B |

**Calendar Settings:**
- Hours: Mon-Fri 9:00 AM - 5:00 PM
- Auto-confirm: Enabled
- Reschedule/Cancellation: Allowed
- Google calendar invites: Enabled
- Event titles use `{{ custom_values.partner__company_name }}`

### ✅ Contact Custom Fields (5 total)

| Field | Key | Type |
|-------|-----|------|
| PSEO - Website URL | `contact.pseo__website_url` | Text |
| PSEO - Monthly Retainer | `contact.pseo__monthly_retainer` | Monetary |
| PSEO - Contract Start Date | `contact.pseo__contract_start_date` | Date |
| PSEO - Next Follow-up | `contact.pseo__next_followup` | Date |
| PSEO - Internal Notes | `contact.pseo__internal_notes` | Large Text |

### ✅ Tags (11 total)

| Tag | Purpose |
|-----|---------|
| `pseo-new-lead` | New lead entered system |
| `pseo-discovery-scheduled` | Discovery call booked |
| `pseo-discovery-completed` | Discovery call completed |
| `pseo-audit-sent` | Initial audit sent |
| `pseo-strategy-scheduled` | Strategy call booked |
| `pseo-strategy-completed` | Strategy call done |
| `pseo-proposal-sent` | Proposal/quote sent |
| `pseo-onboarding` | Client in onboarding |
| `pseo-active-client` | Active paying client |
| `pseo-retention` | In retention/follow-up loop |
| `pseo-lost` | Lost or not interested |

---

## Manual Setup Checklist

### Step 1: Create the Pipeline (5 minutes)

1. Go to **Settings** → **Pipelines** (under CRM section)
2. Click **+ Create Pipeline**
3. Name: `PSEO - Client Pipeline`
4. Add these stages in order:

| # | Stage Name | Purpose |
|---|------------|---------|
| 1 | New Lead | Lead just came in |
| 2 | Discovery Scheduled | Discovery call booked |
| 3 | Discovery Completed | Discovery call done |
| 4 | Audit Sent | Initial SEO audit sent |
| 5 | Strategy Scheduled | Strategy call booked |
| 6 | Strategy Completed | Strategy call done |
| 7 | Proposal Sent | Quote/proposal sent |
| 8 | Onboarding | Signed up, onboarding |
| 9 | Active Client | Fully onboarded client |
| 10 | Retention / Follow-up | Monthly check-ins |
| 11 | Lost / Not Interested | Did not convert |

5. Click **Save**

---

### Step 2: Create Dropdown Custom Fields (10 minutes)

1. Go to **Settings** → **Custom Fields**
2. Click **+ Add Field** for each of the following:

#### Field 1: PSEO - GSC Access
- **Name:** PSEO - GSC Access
- **Type:** Dropdown (Single Option)
- **Object:** Contact
- **Options:**
  - Pending
  - Granted
  - Not Available

#### Field 2: PSEO - GA4 Access
- **Name:** PSEO - GA4 Access
- **Type:** Dropdown (Single Option)
- **Object:** Contact
- **Options:**
  - Pending
  - Granted
  - Not Available

#### Field 3: PSEO - CMS Platform
- **Name:** PSEO - CMS Platform
- **Type:** Dropdown (Single Option)
- **Object:** Contact
- **Options:**
  - WordPress
  - Shopify
  - Wix
  - Squarespace
  - Custom
  - Other

#### Field 4: PSEO - CMS Credentials
- **Name:** PSEO - CMS Credentials
- **Type:** Dropdown (Single Option)
- **Object:** Contact
- **Options:**
  - Pending
  - Received
  - Not Needed

#### Field 5: PSEO - Onboarding Status
- **Name:** PSEO - Onboarding Status
- **Type:** Dropdown (Single Option)
- **Object:** Contact
- **Options:**
  - Not Started
  - In Progress
  - Completed
  - On Hold

#### Field 6: PSEO - Audit Status
- **Name:** PSEO - Audit Status
- **Type:** Dropdown (Single Option)
- **Object:** Contact
- **Options:**
  - Not Started
  - In Progress
  - Completed
  - Sent

#### Field 7: PSEO - Service Tier
- **Name:** PSEO - Service Tier
- **Type:** Dropdown (Single Option)
- **Object:** Contact
- **Options:**
  - Basic
  - Growth
  - Enterprise

---

### Step 3: Create Onboarding Form (10 minutes)

1. Go to **Sites** → **Forms**
2. Click **+ New Form**
3. Name: `PSEO - Client Onboarding Form`
4. Add these fields:

| Field Label | Type | Required | Maps To |
|-------------|------|----------|---------|
| Full Name | Full Name | ✅ | contact.name |
| Email | Email | ✅ | contact.email |
| Phone | Phone | ❌ | contact.phone |
| Website URL | Text | ✅ | contact.pseo__website_url |
| What CMS does your site use? | Dropdown | ✅ | contact.pseo__cms_platform |
| Can you grant GSC access? | Dropdown | ❌ | contact.pseo__gsc_access |
| Can you grant GA4 access? | Dropdown | ❌ | contact.pseo__ga4_access |
| Any specific goals or concerns? | Paragraph | ❌ | contact.pseo__internal_notes |

5. **Form Settings:**
   - Redirect URL: Thank you page or back to partner site
   - Notifications: Enable email to team

6. Click **Save**

7. **Copy the form URL** and update the custom value:
   - Go to **Settings** → **Custom Values**
   - Find `ONBOARDING - Form URL`
   - Paste the form link

---

### Step 4: Create Workflows (15 minutes)

Go to **Automation** → **Workflows** and create these:

#### Workflow 1: Discovery Call Booked

**Trigger:** Appointment Booked → Calendar = "PSEO - Discovery Call"

**Actions:**
1. Add Tag → `pseo-discovery-scheduled`
2. Create/Update Opportunity → Pipeline: PSEO - Client Pipeline, Stage: Discovery Scheduled
3. Send Email → Confirmation with meeting details
   - Subject: `Your Discovery Call is Confirmed | {{ custom_values.partner__company_name }}`
   - Include calendar link and what to prepare

#### Workflow 2: Post-Discovery → Send Audit

**Trigger:** Appointment Status → Status = Showed, Calendar = "PSEO - Discovery Call"

**Actions:**
1. Remove Tag → `pseo-discovery-scheduled`
2. Add Tag → `pseo-discovery-completed`
3. Update Opportunity → Stage: Discovery Completed
4. Wait → 24 hours
5. Add Tag → `pseo-audit-sent`
6. Update Opportunity → Stage: Audit Sent
7. Send Email → SEO Audit + Strategy Call link
   - Subject: `Your SEO Audit is Ready | {{ custom_values.partner__company_name }}`
   - Include: `{{ custom_values.strategy__calendar_url }}`

#### Workflow 3: Strategy Call Booked

**Trigger:** Appointment Booked → Calendar = "PSEO - Strategy Call"

**Actions:**
1. Add Tag → `pseo-strategy-scheduled`
2. Update Opportunity → Stage: Strategy Scheduled
3. Send Email → Strategy call confirmation
   - Include prep materials, what to expect

#### Workflow 4: Onboarding Kickoff

**Trigger:** Tag Added → `pseo-onboarding`

**Actions:**
1. Update Opportunity → Stage: Onboarding
2. Update Field → PSEO - Onboarding Status = "In Progress"
3. Send Email → Onboarding welcome + form link
   - Subject: `Welcome to {{ custom_values.partner__company_name }}! Let's Get Started`
   - Include: `{{ custom_values.onboarding__form_url }}`
4. Create Task → "Review onboarding submission" (due in 3 days)

#### Workflow 5: Retention Follow-up Reminder

**Trigger:** Custom Date Reminder → Field = "PSEO - Next Follow-up", When = On the day

**Actions:**
1. Add Tag → `pseo-retention`
2. Send Internal Notification → "Time for follow-up call with {{contact.name}}"
3. Send Email to Contact → Monthly check-in + scheduling link
   - Include: `{{ custom_values.followup__calendar_url }}`

---

## Flow Architecture Reference

```
┌─────────────────────────────────────────────────────────────────────┐
│                        DISCOVERY LOOP                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐         │
│   │  Discovery   │───▶│   Agency     │───▶│  Discovery   │         │
│   │  Call Page   │    │ Sends Audit  │    │    Call      │         │
│   │{{partner}}.com    │    (PSEO)      │    │              │         │
│   └──────────────┘    └──────────────┘    └──────┬───────┘         │
│                                                   │                 │
│                                           ┌──────▼───────┐         │
│                                           │    Sale      │         │
│                                           │   Closed?    │         │
│                                           └──────┬───────┘         │
│                                                  │ YES              │
│   ┌──────────────┐                       ┌──────▼───────┐         │
│   │  Strategy    │◀──────────────────────│  Strategy    │         │
│   │  Call Page   │                       │    Call      │         │
│   │{{partner}}.com                       └──────────────┘         │
│   └──────────────┘                                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      ONBOARDING ENGINE                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐         │
│   │  Onboarding  │───▶│   Manual     │───▶│  Onboarding  │         │
│   │    Form      │    │ Verify & CRM │    │  Checklist   │         │
│   │              │    │   Update     │    │              │         │
│   └──────────────┘    └──────────────┘    └──────────────┘         │
│                                                   │                 │
│                                           ┌───────┴────────┐       │
│                                           │ • Setup GSC/GA4│       │
│                                           │ • CMS Creds    │       │
│                                           │ • Verify Data  │       │
│                                           │ • Set Expect.  │       │
│                                           └────────────────┘       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                       RETENTION LOOP                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐         │
│   │  Follow-up   │───▶│   Report     │───▶│  Schedule    │         │
│   │    Call      │    │   Metrics    │    │  Next Call   │─────┐   │
│   │              │    │(CRM/Notion)  │    │              │     │   │
│   └──────────────┘    └──────────────┘    └──────────────┘     │   │
│         ▲                                                       │   │
│         └───────────────────────────────────────────────────────┘   │
│                          (Monthly Loop)                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Snapshot Installation Checklist (For New Partners)

When installing this snapshot for a new JV partner:

- [ ] **Custom Values** — Update with partner info:
  - Partner Domain
  - Partner Company Name
  - Partner Email
  - Partner Phone
  - Partner Logo URL

- [ ] **Calendars** — Assign team members and set availability

- [ ] **Landing Pages** — Create/customize with partner branding

- [ ] **Email Templates** — Update branding, logos, colors

- [ ] **Test** — Book a test appointment through each calendar

- [ ] **Workflows** — Review and enable all 5 workflows

- [ ] **Train Partner** — Walk through CRM, pipeline stages, contact fields

---

## Quick Reference: API Token

```
pit-afc24dcf-e1ba-41c8-bd24-4f808bac1219
```

**Scopes Available:** Calendars, Custom Values, Custom Fields, Tags, Forms (read), Contacts  
**Scopes NOT Available:** Pipelines (create), Workflows (create)

---

## Support

- **WellPlan:** wellplan.io
- **PSEO:** pseo.nl
- **GHL API Docs:** marketplace.gohighlevel.com/docs
