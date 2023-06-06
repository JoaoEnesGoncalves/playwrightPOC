# PLAYWRIGHT POC

## POC SCOPE

### Topics to cover

- Reuse browser sessions
- setup via api test pré-conditions
- BDD, gherkin syntax

### System under Test (SUT)

- Pentaho Analyzer

### Scenarios
- Create a analyzer report
- filter a analyzer report
- Delete a analyzer report
___
<br />

## PLAYWRIGHT EVALUATION

### PLUS:

 1. Faster, efficient and flexible
    - 1 browser instance, many contexts ( Save the authentication state, faster, flexible )
    - Test scenarios that span multiple tabs, multiple origins and multiple users, all in one test
    - Engine architecture based on 1:1 relation test vs web socket
    - Native Asynchronous Operations, turn tests more efficient and faster ( avoiding unnecessary waits and leveraging parallelism)

<br />

 2. Great coding productivity
    - Selectors engine ( easily handle frames, shadow DOM )
        - https://playwright.dev/docs/locators
        - https://playwright.dev/docs/other-locators
        - https://playwright.dev/docs/debug#picking-a-locator
    - automatic Waiting and Retry, simplify code and avoid flaky tests
    - Playwright reports tracing, helps understand every interaction on SUT
    - Good and detailed documentation https://playwright.dev/docs/intro

<br />

 3. Large functionalities
    - test API, handle Network Interception: ability to intercept and modify network requests
    - test UI, visual comparisons, accessibility, mobile, Webview2 apps ...
        - Trusted events, Playwright uses real browser input pipeline indistinguishable from the real user.
    - Enhanced DevTools Integration: Playwright integrates closely with the browser's DevTools,

<br />

 4. Support and promised evolution
     - Although Playwright already is a complete test tool, has huge backlog and a dedicate full expert team ( Microsoft, ex-google) daily working on it
<br />
<br />

### MINUS:
 - playwright test runner does not implements natively gherkin features files (dangerous work around)
     - https://github.com/microsoft/playwright/issues/11975
     - serenity-js wraps "reinventing the wheel" many Playwright api and tool features
 - on runtime debug test different actions

<br />

___
## TODO!
 - ESLint implementation
 - study screenplay pattern vs fixtures pages
 - integration, docker in CI/CD + selenium grid integration
 - apply study network interception test / mock data
 - BDD implementation
 - keep study best practices / implementations standards

<br />
<br />

#### Notes and links
   - https://playwright.dev/
   - https://github.com/microsoft/playwright
   - https://techoverdue.com/overview-of-playwright-and-its-architecture/
