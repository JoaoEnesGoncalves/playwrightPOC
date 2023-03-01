# applitoolsPentaho
Test Pentaho style with applitools

## playwright visual comparisons
 - https://playwright.dev/docs/test-snapshots
 - https://playwright.dev/docs/api/class-snapshotassertions


## notes

- run classic runner:

        npx playwright test classicRunner_AnalyzerDialog.spec.ts --project chromium firefox webkit msedge


- run grid:

        npx playwright test ufGrid_AnalyzerDialog.spec.ts


- run setting variables:

        theme=Crystal npx playwright test home --project chrome firefox edge safari


