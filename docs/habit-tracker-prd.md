# Habit Tracker PRD

## Overview
Add a basic habit tracker as a new job-to-be-done (JTBD) in the app. Users can view a list of daily habits and check them off for the current day. Each habit resets to an unchecked state at the start of a new day.

## Goals
- Enable users to manage daily habits quickly.
- Provide a simple checklist interface.
- Automatically reset habit completion status every day.

## Success Metrics
- Number of habits created per user.
- Daily active habit check-ins.
- Retention of users engaging with the habit tracker after 7 days.

## User Stories
1. As a user, I can create and name habits.
2. As a user, I can check a habit to mark it complete for today.
3. As a user, the app automatically resets my habit checks each day so I can start over.

## Functional Requirements
### Backend
- Store habits and their completion state per user.
- Track the date when a habit was last completed.
- Endpoint to fetch all habits with their completion status for the current day.
- Endpoint to create, update, and delete habits.
- Endpoint to toggle a habit's completion status for the day.
- Daily reset job clears completion states that are older than the current day.

### Frontend
- Habit list view showing each habit with a checkbox.
- Ability to add, edit, and delete habits.
- Tapping a checkbox toggles the completion state via API call.
- UI updates to reflect the state immediately.
- Daily reset handled by refreshing data from backend on app open.

## Non-Functional Requirements
- Support up to 50 habits per user.
- API responses under 500ms.
- Local caching of habits for offline access; changes sync when back online.

## Data Model
**Habit**
- id (UUID)
- user_id (UUID)
- name (string)
- last_completed_at (datetime)

**HabitCompletion** (optional if storing separately)
- habit_id (UUID)
- date (date)

## API Endpoints
- `GET /api/habits` – list habits with today's completion status
- `POST /api/habits` – create habit
- `PUT /api/habits/{id}` – update habit
- `DELETE /api/habits/{id}` – delete habit
- `POST /api/habits/{id}/toggle` – toggle today's completion

## UI/UX Design Notes
- Simple checklist with habit name and checkbox.
- Add button to create new habit.
- Swipe left/right or context menu to edit/delete.
- Completed habits appear with a strike-through and greyed-out text.
- Daily reset: when app loads or at midnight via service worker event, fetch fresh state from backend.

## Open Questions
- Should habits support frequencies other than daily?
- Do we need analytics for habit streaks?
- How are notifications handled for reminding users?

## Out of Scope
- Social or sharing features.
- Habit templates from other users.

