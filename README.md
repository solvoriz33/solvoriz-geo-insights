# Solvoriz GEO Insights

Build the complete frontend application for SOLVORIZ GEO.

IMPORTANT PRODUCT FLOW:

This is NOT a traditional marketing website.

When a user visits Solvoriz GEO, they should immediately enter the product experience.

Primary flow:

Landing/Product Home
→ Login / Sign Up
→ Dashboard
→ Enter business / website / product
→ GEO Analysis
→ Results
→ Recommendations
→ Monitoring

Do NOT build a large marketing homepage with pricing sections, testimonials, feature walls, etc.

The homepage should feel like the actual product.

==================================================

PRODUCT
==================================================

Product name:

SOLVORIZ GEO

Category:

Generative Engine Optimization / AI Search Visibility.

Core purpose:

Help businesses understand and improve how they appear inside AI-generated answers and recommendations.

This is NOT only for local businesses.

It works for:

SaaS

startups

e-commerce

D2C

B2B

agencies

software companies

professional services

education

healthcare

hospitality

manufacturers

technology companies

local businesses

essentially any business with an online presence

Core product loop:

INPUT
→ UNDERSTAND
→ ANALYZE
→ MEASURE AI VISIBILITY
→ COMPARE COMPETITORS
→ FIND GAPS
→ RECOMMEND ACTIONS
→ MONITOR

==================================================
2. FIRST SCREEN / PRODUCT HOMEPAGE

When the user visits the root route /, do NOT show a traditional SaaS marketing homepage.

Create a minimal, premium product landing screen.

Top navigation:

SOLVORIZ GEO

Right:

Log in
Sign up

Main content centered vertically.

Small label:

GENERATIVE ENGINE OPTIMIZATION

Large heading:

“What do you want to make Generative Engine Optimized?”

Supporting text:

“Analyze how AI search understands, mentions and recommends your business, product or brand.”

Large input card.

Placeholder:

“Enter your website, company, product, or brand…”

The input should accept:

website URL

company name

product name

brand name

Primary button:

“Analyze with GEO”

Secondary small option:

“Try an example”

Below the input:

“Powered by AI visibility analysis”

Do NOT clutter this screen.

No giant illustrations.

No stock images.

No generic AI robot.

No huge marketing copy.

The feeling should be:

Open product → immediately understand what it does → start.

==================================================
3. AUTHENTICATION

When a user tries to analyze or access the dashboard without authentication:

Redirect to:

/login

Create a beautiful minimal authentication screen.

Logo:

SOLVORIZ GEO

Heading:

“Welcome to Solvoriz GEO”

Fields:

Email
Password

Buttons:

Log in

Continue with Google

Link:

“Don't have an account? Sign up”

Signup:

Name
Email
Password
Company name

After successful authentication:

redirect to:

/dashboard

For now authentication can use mocked/local state, but structure the frontend so Supabase Auth can be connected later.

Create an auth service abstraction.

Example:

src/services/auth.ts

==================================================
4. DASHBOARD

Route:

/dashboard

This is the main product homepage after login.

Layout:

Left sidebar
Top navigation
Main content

Sidebar:

SOLVORIZ
GEO

Overview
AI Visibility
Queries
Competitors
Citations
Recommendations
Reports

Bottom:

Settings
Help
User profile

Top bar:

Workspace name

“Run Analysis”

Notifications

Profile

==================================================
5. DASHBOARD FIRST EXPERIENCE

If the user has NOT analyzed anything yet:

Do NOT show an empty analytics dashboard.

Instead show an onboarding state.

Center:

“Let's understand how AI sees your business.”

Large input:

“Enter your website or business name”

Button:

“Start GEO Analysis”

Below:

“You can change or add businesses later.”

This should be extremely simple.

==================================================
6. ONBOARDING ANALYSIS FLOW

After submitting:

Show a beautiful analysis screen.

Heading:

“Analyzing your AI visibility…”

Animated progress steps:

01
Understanding your business

02
Identifying your products and services

03
Generating customer queries

04
Analyzing AI visibility

05
Comparing competitors

06
Analyzing citations

07
Building recommendations

Use realistic progress animation.

Do NOT make it look fake or overly flashy.

After completion:

redirect to:

/dashboard

==================================================
7. DASHBOARD OVERVIEW

Dashboard heading:

“AI Visibility Overview”

Subheading:

“Here's how AI search currently sees your business.”

Top metrics:

AI Visibility
72/100

Mention Rate
68%

Recommendation Rate
61%

Citation Coverage
54%

Each metric should include:

current value

change from previous period

small trend visualization

==================================================
8. AI VISIBILITY

Route:

/dashboard/visibility

Heading:

“AI Visibility”

Main score:

72 / 100

Explain:

“This score represents observed visibility across your tracked AI search queries. It is not an official ranking from any AI provider.”

Breakdown:

Mention Rate
Recommendation Rate
Query Coverage
Citation Coverage
Brand Accuracy
Sentiment

Create clean charts.

==================================================
9. AI ENGINE BREAKDOWN

Show:

ChatGPT
76%

Gemini
71%

Claude
68%

Other AI Search
59%

Use clean horizontal bars.

IMPORTANT:

Do not claim that these are official rankings.

Use wording:

“Observed visibility”

“Tracked responses”

“Visibility signal”

==================================================
10. QUERIES

Route:

/dashboard/queries

Heading:

“Tracked Queries”

Allow users to add queries.

Button:

“Add Query”

Table:

Query
Category
AI Engine
Mentioned
Recommended
Position
Trend
Last Checked

Example:

“best project management software for startups”

“best alternatives to notion”

“best CRM for small businesses”

“best productivity software”

Statuses:

Mentioned
Recommended
Not Found

Filters:

All
Mentioned
Recommended
Not Found
Improving
Declining

==================================================
11. COMPETITORS

Route:

/dashboard/competitors

Heading:

“Competitor Intelligence”

Show:

Your Business
72

Competitor A
84

Competitor B
78

Competitor C
63

Show:

Visibility gap
Shared queries
Competitor wins
Lost opportunities

Important card:

“Why competitors are being recommended”

Example:

Competitor A appears in 38 tracked queries where your business does not.

Button:

“View Gap”

==================================================
12. CITATIONS

Route:

/dashboard/citations

Heading:

“Citation Intelligence”

Main metric:

Citation Coverage
54%

Show:

Top sources
Source type
Mentions
Authority
Last Seen
Impact

Also show:

“Missing Sources”

with actionable recommendations.

==================================================
13. RECOMMENDATIONS

Route:

/dashboard/recommendations

Heading:

“GEO Recommendations”

Do NOT simply show generic AI-generated tips.

Organize recommendations by priority.

Critical
High Impact
Medium Impact
Completed

Example:

“Improve third-party authority”

Why it matters:

“Competitors are being referenced by more authoritative external sources for tracked queries.”

Impact:

High

Effort:

Medium

Button:

“View Action Plan”

Other examples:

Strengthen brand entity consistency
Create comparison content
Improve product information
Expand citation coverage
Add authoritative references
Improve FAQ coverage

==================================================
14. REPORTS

Route:

/dashboard/reports

Heading:

“Reports”

Show:

Monthly AI Visibility Report

Metrics:

Visibility change
Top winning queries
Lost queries
Competitor movement
Citation changes
Recommendations completed

Buttons:

Generate Report
Export PDF
Export CSV

Mock these actions for now.

==================================================
15. SETTINGS

Route:

/dashboard/settings

Sections:

Workspace
Business
Queries
Competitors
Notifications
Billing

Business information:

Company name
Website
Industry
Description
Products / Services
Target audience

==================================================
16. GLOBAL ANALYSIS BUTTON

The dashboard should always have a visible:

“Run Analysis”

button.

When clicked:

show modal:

“Run AI Visibility Analysis”

Options:

Analyze all tracked queries
Analyze selected queries

Button:

“Start Analysis”

Show progress.

==================================================
17. DESIGN SYSTEM

Design should be:

Premium
Minimal
Technical
Trustworthy
Fast
Modern

Reference feeling:

Linear
Stripe
Vercel
Notion

Do NOT copy them.

Use:

white / off-white background
dark typography
subtle borders
small shadows
clean cards
8px spacing system
rounded corners
restrained accent color

Avoid:

neon gradients
3D AI robots
stock photography
excessive glassmorphism
overly rounded childish UI
huge decorative graphics

This is B2B infrastructure software.

==================================================
18. RESPONSIVE DESIGN

Desktop:

Full sidebar + dashboard.

Tablet:

Collapsible sidebar.

Mobile:

Drawer navigation.

Cards stack vertically.

Tables become horizontally scrollable or responsive cards.

The product must remain usable on mobile.

==================================================
19. SEO

Even though this is primarily a product application, optimize the public root page.

Title:

“Solvoriz GEO — Generative Engine Optimization & AI Search Visibility”

Meta description:

“Measure how AI search discovers, mentions and recommends your business. Solvoriz GEO helps businesses monitor AI visibility, competitors, citations and optimization opportunities.”

Implement:

semantic HTML

proper heading hierarchy

meta title

meta description

canonical placeholder

Open Graph metadata

Twitter metadata

robots metadata

favicon

structured data

==================================================
20. GEO OPTIMIZATION OF THE WEBSITE

Make the public product explanation easy for AI systems to understand.

Clearly state:

Solvoriz GEO is a Generative Engine Optimization platform.

It helps businesses measure and improve AI search visibility.

It analyzes:

AI mentions
AI recommendations
tracked queries
competitors
citations
brand information
visibility trends

Create a concise FAQ:

What is Generative Engine Optimization?

What is AI search visibility?

What does Solvoriz GEO measure?

Is Solvoriz GEO only for local businesses?

Which businesses can use Solvoriz GEO?

How is GEO different from SEO?

Use factual, concise answers.

Add valid Organization and SoftwareApplication JSON-LD.

==================================================
21. COMPONENT ARCHITECTURE

Use reusable components.

Example:

components/
AppShell
Sidebar
Topbar
MetricCard
VisibilityChart
QueryTable
CompetitorCard
CitationTable
RecommendationCard
AnalysisModal
AnalysisProgress
EmptyState
LoadingState
ErrorState

Pages:

pages/
Home
Login
Signup
Dashboard
Visibility
Queries
Competitors
Citations
Recommendations
Reports
Settings

==================================================
22. SERVICE ARCHITECTURE

Create service abstractions.

src/services/

auth.ts
geoApi.ts
analytics.ts
competitors.ts
queries.ts
reports.ts

For now use realistic mock data.

IMPORTANT:

Do not tightly couple mock data to UI components.

The backend will later replace these service functions with real APIs.

==================================================
23. FUTURE BACKEND COMPATIBILITY

Prepare the frontend for a backend that will eventually perform:

Website crawling
Business/entity extraction
Query generation
AI model querying
AI response analysis
Competitor detection
Citation extraction
Visibility scoring
GEO recommendations
Historical monitoring

Do NOT implement fake AI functionality pretending to be real.

Keep the frontend ready for the real GEO engine.

==================================================
24. EMPTY STATES

If no business has been analyzed:

Show:

“Your AI visibility starts here.”

Input:

“Enter your website or business…”

Button:

“Start Analysis”

If no queries:

“No tracked queries yet.”

Button:

“Add Query”

If no competitors:

“No competitors detected yet.”

Button:

“Discover Competitors”

==================================================
25. LOADING STATES

Use skeleton loaders for dashboards.

For analysis use the dedicated progress experience.

Never leave blank screens.

==================================================
26. ERROR STATES

Use friendly errors.

Example:

“We couldn't complete the analysis.”

Buttons:

Try Again
Return to Dashboard

==================================================
27. PRODUCT LANGUAGE

Never use fake claims.

DO NOT say:

“Rank #1 on ChatGPT”
“Guarantee ChatGPT rankings”
“Hack AI search”
“Control AI answers”

Instead use:

“AI visibility”
“Observed mentions”
“Recommendations”
“Tracked responses”
“AI search presence”
“Citation visibility”
“Optimization opportunities”

==================================================
28. FINAL UX

The entire experience should communicate this in under 10 seconds:

“I enter my business.”

“Solvoriz checks how AI sees it.”

“I see my visibility.”

“I understand why competitors appear.”

“I get specific actions.”

“Solvoriz keeps monitoring the changes.”

The product should feel simple on the surface but sophisticated underneath.

DO NOT add unnecessary features.

DO NOT build a giant marketing website.

DO NOT stop after creating the landing page.

Build the complete frontend:

Home
Authentication
Onboarding
Dashboard
AI Visibility
Queries
Competitors
Citations
Recommendations
Reports
Settings
Responsive layouts
SEO
GEO-friendly public content
Mock service architecture

Make it production-quality and deployment-ready. I HAVE UPLAOEDE THE HOMEPAGE SMAPLE IMAGE  I HAVE UPLAODED LOGO THATS INSIDE DASHBAORD WE SHOULD ASK AFTER LOGIN WHICH TYPE O THEME LIGHT DARK  WHAT ARE YOU REST KEEP AS PER ALIGNED TO MY LOGO AND SYSTEM

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dc1c9f87-1cd0-42bf-999a-3d8a2225a245).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
