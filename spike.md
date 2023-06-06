
# BDD in playwright


## [Feature] BDD implementation with Playwright test runner [#11975](https://github.com/microsoft/playwright/issues/11975)
<br />

## Playwright: Test library vs Test runner
 - https://playwright.dev/docs/library#key-differences
    - test library lack/ is missing some features.... like parallelism and other configuration
<br />
<br />
___

## 3rd party implementations
<br />

### 1. Cucumber-js runner

| PLUS  | MINUS |
| :---: |:---: |
| Use cucumber options | unable to use Playwright runner features ( hardest code... ) |
|| missing VS Code extensions (debug, run from VS code)|
|| handle set up and teardown by feature, suite etc https://github.com/cucumber/cucumber-jvm/issues/515 |

#### Integrating Cucumber.js with Playwright
- https://github.com/microsoft/playwright/issues/11975#issuecomment-1567598903
- https://github.com/microsoft/playwright/issues/11975#issuecomment-1575231103
 - https://serenity-js.org/blog/support-for-playwright-ui-mode/
 - https://serenity-js.org/handbook/web-testing/your-first-web-scenario/
 - https://github.com/serenity-js/serenity-js-cucumber-playwright-template

        npm install @serenity-js/{core,web,playwright,playwright-test,assertions,console-reporter,serenity-bdd} --save-dev
        - devDependencies automatically added on package.json

        npm ci
        https://serenity-js.org/blog/support-for-playwright-ui-mode#configuring-serenityjs


##### other wraps
 2. https://github.com/Tallyb/cucumber-playwright
    * https://tally-b.medium.com/e2e-testing-with-cucumber-and-playwright-9584d3ef3360
<br />

### 2. Playwright runner + cucumber-js
 1. https://github.com/vitalets/playwright-bdd
 2. https://github.com/Niitch/gherkin-wrapper

| PLUS  | MINUS |
| :---: |:---: |
| https://github.com/vitalets/playwright-bdd#why-playwright-runner | https://github.com/vitalets/playwright-bdd#limitations|
