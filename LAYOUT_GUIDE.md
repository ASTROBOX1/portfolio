# Visual Layout & Hierarchy Guide
## Premium Portfolio Structure

---

## 🗂️ PAGE STRUCTURE OVERVIEW

```
┌─────────────────────────────────────────────────────────────┐
│                     NAVIGATION BAR (fixed)                   │
│  MS  ─────────────────────────────  About Work Contact     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      HERO SECTION                            │
│                   (100vh, centered)                          │
│                                                              │
│                 🎯 AI & DATA SCIENCE ENGINEER                │
│                   Mohamed Sayed                              │
│                                                              │
│           Transforming complex data into                   │
│           intelligent systems                              │
│                                                              │
│        [Explore My Work]  [Get in Touch]                    │
│                                                              │
│                           ↓ (bounce animation)               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│         FEATURED PROJECT (full-width asymmetric)             │
│  ┌──────────────────────┐  ┌──────────────┐                 │
│  │                      │  │ Title        │                 │
│  │                      │  │ Problem      │                 │
│  │   Project Image      │  │ Approach     │                 │
│  │   (60% width)        │  │ Impact       │                 │
│  │                      │  │ Tech Stack   │                 │
│  │                      │  │ [CTA Button] │                 │
│  └──────────────────────┘  └──────────────┘                 │
│                         (40% width)                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│        PROJECTS GRID (asymmetric 2 columns)                  │
│  ┌─────────────────────────┐  ┌──────────────┐              │
│  │   Project 2             │  │   Project 3  │              │
│  │   (60% width)           │  │   (40% width)│              │
│  │                         │  │              │              │
│  │   - Title               │  │   - Title    │              │
│  │   - Problem             │  │   - Problem  │              │
│  │   - Approach            │  │   - Approach │              │
│  │   - Impact              │  │   - Impact   │              │
│  │   - Tech                │  │   - Tech     │              │
│  │   - [CTA]               │  │   - [CTA]    │              │
│  └─────────────────────────┘  └──────────────┘              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│             SKILLS/EXPERTISE (4 columns)                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ Machine  │ │  Data    │ │   AI     │ │  Tools & │       │
│  │ Learning │ │Enginering│ │ Applied  │ │Platforms │       │
│  │          │ │          │ │          │ │          │       │
│  │• Reg     │ │• EDA     │ │• HC AI   │ │• Python  │       │
│  │• Class   │ │• FE      │ │• NLP     │ │• Git     │       │
│  │• Cluster │ │• Clean   │ │• CV      │ │• AWS     │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│          EXPERIENCE / EDUCATION (cards)                      │
│  ┌────────────────────────────────────────────────────┐      │
│  │ 💼 Data Science Trainee - Creativa Innovation Hub  │      │
│  │    Dec 2025 – Present                              │      │
│  │    • Built ML models with real-world datasets      │      │
│  │    • EDA, preprocessing, ML algorithms             │      │
│  │    • Interactive dashboards & visualizations       │      │
│  └────────────────────────────────────────────────────┘      │
│                                                              │
│  ┌────────────────────────────────────────────────────┐      │
│  │ 🎓 B.Sc. AI & Computer Science - Benha University │      │
│  │    In Progress                                      │      │
│  └────────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              CONTACT / CTA SECTION                           │
│                                                              │
│          Let's Build Something Together                    │
│     I'm open to full-time roles and interesting problems   │
│                                                              │
│         [Contact Me]     [View Resume]                      │
│                                                              │
│         GitHub  LinkedIn  Email                            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                       FOOTER                                 │
│         © 2025 Mohamed Sayed. All rights reserved.          │
│           Designed to inspire. Built with passion.           │
└─────────────────────────────────────────────────────────────┘
```

---

## 📐 DETAILED SECTION LAYOUTS

### Hero Section (100vh)

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│                                                     │
│           ┌─────────────────────────────┐          │
│           │  Badge + title + subtitle   │          │
│           │       CTA Buttons           │          │
│           │    Scroll Indicator         │          │
│           └─────────────────────────────┘          │
│                                                     │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘

Spacing:
- Top: 20% of viewport
- Badge: Center
- Gap between badge & title: 24px
- Gap between title & subtitle: 16px
- Gap between subtitle & buttons: 48px
- Button gap: 24px
- Scroll indicator: 20% from bottom
```

### Featured Project (Asymmetric Split)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ┌─────────────────────────┐   ┌──────────────────┐    │
│  │                         │   │ Badge (Featured) │    │
│  │                         │   │ Title (2.5x)     │    │
│  │                         │   │ Problem Statement│    │
│  │   Project Image         │   │ (emoji prefix)   │    │
│  │                         │   │                  │    │
│  │   60% width             │   │ Approach         │    │
│  │   Height: auto (500px)  │   │ (bullet points)  │    │
│  │   Border-radius: 12px   │   │                  │    │
│  │   Hover: zoom + glow    │   │ Impact           │    │
│  │                         │   │ (cyan, metrics)  │    │
│  │                         │   │                  │    │
│  │                         │   │ Tech Tags        │    │
│  │                         │   │ [CTA Button] →   │    │
│  └─────────────────────────┘   └──────────────────┘    │
│  Left padding: 0px              40% width               │
│                                 Right padding: 48px     │
│                                                          │
└──────────────────────────────────────────────────────────┘

Content Spacing:
- Image border: 1px indigo/20%
- Image to content gap: 0px
- Badge to title: 8px
- Title to problem: 12px
- Problem to approach: 12px
- Approach to impact: 12px
- Impact to tech: 24px
- Tech to button: 24px
- Button width: Full right column
```

### Projects Grid (Asymmetric 2-column)

```
Desktop Layout (1200px+):
┌────────────────────────────────────────────────────────┐
│                                                        │
│  ┌──────────────────────────┐  ┌─────────────────┐   │
│  │                          │  │                 │   │
│  │  Project 2 Card          │  │  Project 3      │   │
│  │  (60% width)             │  │  (40% width)    │   │
│  │                          │  │                 │   │
│  │  - Image: 280px height   │  │  - Image: 280px │   │
│  │  - Content: 2rem padding │  │    height       │   │
│  │  - Card gap: 24px        │  │  - Content:     │   │
│  │                          │  │    2rem padding │   │
│  │  - Hover: lift 12px      │  │  - Hover: lift  │   │
│  │           glow           │  │         12px    │   │
│  └──────────────────────────┘  └─────────────────┘   │
│                                                        │
└────────────────────────────────────────────────────────┘

Tablet Layout (768px - 1199px):
┌────────────────────────────────────┐
│  ┌──────────────────────────────┐  │
│  │      Project 2 Card          │  │
│  │      (Full width)            │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │      Project 3 Card          │  │
│  │      (Full width)            │  │
│  └──────────────────────────────┘  │
│                                    │
└────────────────────────────────────┘

Mobile Layout (< 768px):
┌──────────────────────┐
│  ┌────────────────┐  │
│  │  Project 2     │  │
│  │  (Full width)  │  │
│  └────────────────┘  │
│                      │
│  ┌────────────────┐  │
│  │  Project 3     │  │
│  │  (Full width)  │  │
│  └────────────────┘  │
│                      │
└──────────────────────┘
```

### Project Card Detailed Structure

```
┌────────────────────────────────────┐
│                                    │
│  ┌──────────────────────────────┐  │
│  │  Project Image               │  │
│  │  Height: 280px               │  │
│  │  Hover: scale 1.08           │  │
│  │  Duration: 500ms             │  │
│  └──────────────────────────────┘  │
│                                    │
│  Title (H3 / 1.5rem / 600 weight) │
│  Color: #f8fafc                    │
│  Margin-bottom: 12px               │
│                                    │
│  Problem (Inter 400 / 0.95rem)    │
│  Prefix: 🎯                        │
│  Color: #cbd5e1                    │
│  Margin-bottom: 8px                │
│                                    │
│  Approach (Inter 400 / 0.95rem)   │
│  Prefix: ⚡                        │
│  Color: #94a3b8                    │
│  Margin-bottom: 12px               │
│                                    │
│  Impact (Inter 600 / 0.95rem)     │
│  Prefix: 📈                        │
│  Color: #06b6d4                    │
│  Margin-bottom: 16px               │
│                                    │
│  ──────────────────────────────    │
│  Border-top: 1px #334155           │
│  Padding-top: 16px                 │
│                                    │
│  Tech Tags:                        │
│  Background: indigo/10%            │
│  Border: 1px indigo/20%            │
│  Gap: 8px                          │
│  Margin-bottom: 16px               │
│                                    │
│  [View Case Study →]               │
│  Width: 100%                       │
│  Padding: 12px                     │
│  Border: 1px indigo/30%            │
│  Border-radius: 8px                │
│                                    │
└────────────────────────────────────┘

Total Card Padding: 24px (2rem)
Card Border-radius: 12px
Card Background: rgba(26, 25, 43, 0.5)
Card Border: 1px rgba(194, 202, 214, 0.1)
Hover Border: rgba(99, 102, 241, 0.3)
```

### Skills Section (4 Columns)

```
┌────────────────────────────────────────────────────────┐
│  Section Title: "Core Competencies"                    │
│  Font: Space Grotesk 700 / 2.25rem                    │
│  Margin-bottom: 64px                                   │
└────────────────────────────────────────────────────────┘

┌─────────────┬─────────────┬─────────────┬─────────────┐
│             │             │             │             │
│  Machine    │  Data       │   Applied   │  Tools &    │
│  Learning   │  Engineering│   AI        │  Platforms  │
│             │             │             │             │
│ • Classifi- │ • EDA       │ • Healthcare│ • Python    │
│   cation    │ • Feature   │   AI        │ • Git       │
│ • Regression│   Engineer  │ • NLP Basics│ • Jupyter   │
│ • Clustering│ • Data      │ • Computer  │ • AWS/GCP   │
│ • Ensemble  │   Cleaning  │   Vision    │ • Kaggle    │
│             │ • Handling  │             │ • Docker    │
│             │   Missing   │             │             │
│             │   Data      │             │             │
│             │             │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┘

Column Width: 25% each (equal)
Column Padding: 24px each
Border-left: 2px solid rgba(99, 102, 241, 0.3)
Text Color: #cbd5e1
Bullet color: #94a3b8
Line-height: 1.8
```

### Experience Section (Timeline Cards)

```
┌──────────────────────────────────────────────────────┐
│ Section Title: "Experience & Education"              │
│ Font: Space Grotesk 700 / 2.25rem                   │
│ Margin-bottom: 48px                                  │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│                                                      │
│  ════════════ EXPERIENCE CARD ════════════          │
│  💼 Data Science Trainee                             │
│     Creativa Innovation Hub (MCIT)                   │
│     Dec 2025 – Present                               │
│                                                      │
│     • Built machine learning models using            │
│       real-world datasets                            │
│     • Performed data cleaning, preprocessing, EDA    │
│     • Applied regression, classification,            │
│       clustering algorithms                          │
│     • Developed interactive dashboards               │
│                                                      │
│  Border-left: 3px solid #6366f1                     │
│  Padding: 24px (2rem)                                │
│  Background: slight gradient                         │
│  Hover: lift 4px, glow effect                        │
│                                                      │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│                                                      │
│  ════════════ EDUCATION CARD ════════════            │
│  🎓 B.Sc. Computer Science & AI                      │
│     Benha University, Egypt                          │
│     In Progress                                      │
│                                                      │
│  Border-left: 3px solid #8b5cf6                     │
│  Padding: 24px (2rem)                                │
│  Background: slight gradient                         │
│  Hover: lift 4px, glow effect                        │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### Contact Section (Centered)

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│            Let's Build Something Together          │
│            (H2: Space Grotesk 700, 2.25rem)        │
│                                                     │
│   I'm open to full-time roles, collaborations,    │
│   and interesting problems that matter.            │
│   (Body: Inter 400, 1.125rem, #cbd5e1)            │
│                                                     │
│                                                     │
│         [Contact Me]      [View Resume]            │
│         (Primary CTA)     (Secondary CTA)          │
│                                                     │
│                                                     │
│          GitHub    LinkedIn    Email               │
│          (Social links, hover: scale 1.1)         │
│                                                     │
└─────────────────────────────────────────────────────┘

Section Width: Max 800px (centered)
Padding top: 96px
Padding bottom: 96px
Title margin-bottom: 24px
Subtitle margin-bottom: 48px
Button gap: 24px
Social links gap: 32px
```

---

## 🎨 VISUAL HIERARCHY PYRAMID

```
                        ▲
                        │
                  FEATURED PROJECT
                   (Most Attention)
                        │
                   Projects Grid
                   (2 cards, clear)
                        │
                 Skills Section
                  (Text-based info)
                        │
              Experience Section
                   (Timeline)
                        │
                Contact Section
                  (Simple CTA)
                        │
                  Footer (Minimal)
                        │
                        ▼
```

---

## 📏 COMPLETE SPACING REFERENCE

```css
/* Global spacing hierarchy */
--space-1: 0.5rem (8px)    - Micro spacing
--space-2: 1rem (16px)     - Small elements
--space-3: 1.5rem (24px)   - Regular spacing
--space-4: 2rem (32px)     - Medium spacing
--space-5: 3rem (48px)     - Large spacing
--space-6: 4rem (64px)     - XL spacing
--space-7: 6rem (96px)     - Section spacing

/* Applied throughout */
Hero title to subtitle: space-2 (16px)
Subtitle to buttons: space-6 (64px)
Button gap: space-4 (32px)

Featured project card: space-4 (32px) padding, space-6 (64px) between sections
Project card image: space-3 (24px) margin-bottom
Project title: space-2 (16px) margin-bottom
Project metadata: space-1 (8px) margin-bottom
Tech tags: space-1 (8px) gap

Section padding: space-6 (64px) vertical, space-4 (32px) horizontal
Section margin-bottom: space-7 (96px)

Skills columns: space-3 (24px) padding
Experience cards: space-4 (32px) padding, space-4 (32px) margin-bottom
Contact section padding: space-7 (96px) vertical
```

---

## ✨ ANIMATION SEQUENCE TIMELINE

```
Page Load:
  0ms    ├─ Navigation fade in (0.6s)
  100ms  ├─ Hero badge slide down (0.6s)
  300ms  ├─ Hero title fade + slide up (0.8s)
  500ms  ├─ Hero subtitle fade in (0.8s)
  700ms  ├─ CTA buttons fade in (0.8s)
  1000ms └─ Scroll trigger animations begin

On Scroll:
  ├─ Featured project:
  │  ├─ Image fades in from left (1.2s)
  │  └─ Content fades in from right (1.2s)
  │
  ├─ Project cards:
  │  ├─ Project 2 fades up (0.8s, delay 0ms)
  │  └─ Project 3 fades up (0.8s, delay 200ms)
  │
  ├─ Skill categories:
  │  └─ Each fades up (0.8s, staggered 100ms)
  │
  ├─ Experience cards:
  │  └─ Each fades up (0.8s, staggered 150ms)
  │
  └─ Contact section:
     └─ Fades up + scales in (0.8s)

On Interaction:
  ├─ Button hover: lift 4px (300ms ease)
  ├─ Card hover: lift 12px (300ms ease)
  ├─ Image hover: scale 1.08x (500ms ease)
  └─ Link hover: underline animate in (300ms ease)
```

---

## 🎯 DESIGN IMPLEMENTATION PRIORITIES

**Phase 1 (MVP):**
1. Navigation + Hero section
2. Featured project section
3. Projects grid
4. Contact CTA

**Phase 2 (Polish):**
1. Skills section
2. Experience section
3. Scroll animations
4. Hover interactions

**Phase 3 (Premium):**
1. Micro-interactions refinement
2. Performance optimization
3. Accessibility compliance
4. Mobile experience polish

**Phase 4 (Deploy):**
1. Image optimization
2. SEO metadata
3. Analytics setup
4. Final user testing

