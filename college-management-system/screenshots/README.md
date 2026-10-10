# Screenshot gallery

33 browser captures: 18 page/form/responsive screenshots plus 15 demonstrations of the requested features.

Files 19–33 show student display/search/filter/delete, course add/search/filter/details/delete, assigned-course deletion protection, and Warning/Detained attendance states.

See the [project README](../README.md#-screenshots) for the embedded gallery. Regenerate with `npm test` from `college-management-system/`.

For only the feature demonstrations, run `npx playwright test tests/features.spec.js` from the app directory. If port 5173 is occupied, set `PLAYWRIGHT_PORT` to an available port before running the tests (PowerShell: `$env:PLAYWRIGHT_PORT='5199'`).
