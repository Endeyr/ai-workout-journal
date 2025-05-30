# 🏋️‍♂️ AI-Powered Workout Journal – Project Plan

## 🎯 Goal
Build a workout journal web app where users can log workouts, view history, and get AI-powered insights like summaries, suggestions, and trend analysis.

---

## 🧱 Tech Stack

| Layer    | Tech                                      |
| -------- | ----------------------------------------- |
| Frontend | React + TypeScript                        |
| Backend  | Next.js API Routes or Express             |
| Database | PostgreSQL (Prisma or Supabase)           |
| Auth     | Supabase Auth or NextAuth                 |
| AI API   | OpenAI (GPT-4 or Claude)                  |
| Styling  | TailwindCSS (or your choice)              |
| State    | Context API / Zustand / Redux (if needed) |

---

## ✅ Phase 1: Core Journal Functionality (CRUD)

### Goal: Implement core workout tracking features

#### Tasks
- [x] Set up project with Next.js, TypeScript, and styling
- [x] Design workout data model:
  - Workout: date, type, duration, notes
  - Exercises: name, sets, reps, weight
- [ ] Create database schema with Prisma or Supabase
- [ ] Build workout pages:
  - [ ] Add Workout (form)
  - [ ] Edit Workout
  - [ ] Delete Workout
  - [ ] View Workout list (dashboard/history)
- [ ] Implement auth (Sign in/out) with Supabase or NextAuth

#### ✅ Milestone:
Users can log, view, edit, and delete workouts.

---

## 🤖 Phase 2: AI Integration (Insights & Summarization)

### Goal: Use an LLM API to analyze and enhance workout entries

#### Tasks
- [ ] Set up OpenAI or Claude API access
- [ ] Add "Summarize My Week" feature
- [ ] Suggest workout tips based on user notes
- [ ] Generate motivational feedback from workout trends

#### ✅ Milestone:
Users can receive weekly AI-generated summaries and suggestions.

---

## 📊 Phase 3: Dashboard & Analytics

### Goal: Visualize progress and provide personalized insights

#### Tasks
- [ ] Show weekly/monthly workout trends (charts)
- [ ] Display personal bests (e.g., heaviest lift)
- [ ] Add LLM prompt: "What can I improve next week?"
- [ ] Add filters (e.g., by workout type)

#### ✅ Milestone:
Users can explore progress visually and ask the AI for improvement suggestions.

---

## 🌟 Phase 4: Polish & Stretch Goals

#### Optional Features
- [ ] Mobile responsiveness
- [ ] Dark mode
- [ ] Voice input for workouts
- [ ] Share workouts with friends
- [ ] Export data (PDF or CSV)
- [ ] Offline support (PWA)

---

## 🧪 Testing & QA

- [ ] Unit tests for components and utilities
- [ ] Integration tests for API routes
- [ ] End-to-end test plan for the main workflow

---

## 📁 Suggested Folder Structure (Next.js)

/app
  /workouts
    page.tsx
    [id].tsx
  /api
    /workouts
      route.ts (GET, POST)
      [id].ts (PUT, DELETE)
  /auth
/prisma
  schema.prisma
/lib
/components
/hooks
/utils
/types