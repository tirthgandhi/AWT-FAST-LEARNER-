# Verification results

## Repository-root layout verification — 11 October 2026

The application now runs directly from `D:\AWT-FAST-LEARNER-`. After moving it, `npm run lint`, `npm run build`, both unit tests, and all 8 browser tests passed (24.5 seconds for the browser suite). README local links were checked successfully. Run all npm commands from the repository root; screenshots are in `screenshots/`.

## Earlier verification

Executed on 10 October 2026 with Node.js 26.3.1, npm 11.5.2 and Playwright Chromium on Windows.

On 11 October 2026, lint and both unit tests passed again, followed by all **8 browser tests in 25.6 seconds** using `PLAYWRIGHT_PORT=5199`. The new feature demonstrations generated screenshots 19–33. All 33 image links in each README resolve to existing files. The original build and installation results below are retained from 10 October.

| Check | Result |
|---|---|
| npm install | Passed; dependency audit reported zero vulnerabilities |
| npm run dev | Passed; Vite served every application route during browser tests |
| npm run build | Passed; production assets generated successfully |
| npm run lint | Passed with no warnings after the final source check |
| npm run test:unit | 2 passed |
| npm test | 8 passed on 11 October; full run completed in 25.6 seconds |
| Screenshot capture | 33 PNGs saved in screenshots/ |
| Responsive checks | 390px mobile and 900px tablet: no page-level horizontal overflow |
| Visual inspection | Desktop dashboard, students, courses, detail pages, mobile dashboard and mobile form reviewed |

## Functional coverage

- Student add, edit, delete and cancel; edits and deletions survive reload.
- Required fields, duplicate enrollment, invalid email and out-of-range attendance.
- Student search and course filtering together.
- Course add, edit, delete and reload persistence; duplicate course-code validation.
- Assigned courses cannot be deleted; course search and status filtering work together.
- Student and course details, missing IDs and unknown routes.
- Attendance boundaries: 0, 59.9, 60, 74.9, 75 and 100; invalid numbers rejected.
- Dashboard sample average (69.0%), empty-state average (0%) and empty-array persistence.
- Denied storage and malformed JSON produce visible warnings; malformed content is preserved.
- Mobile drawer opens, navigates and closes; forms can be dismissed with Escape.
- No uncaught page errors in the student and screenshot workflows.

## Scope

Browser automation used Chromium. Firefox, Safari and real mobile devices were not tested. Data is browser-local, with no backend, authentication or cross-device synchronization. Static hosting needs an index.html fallback for BrowserRouter routes.

Run the documented commands from the repository root to reproduce these checks. npm test also refreshes the screenshots from fresh sample data.
