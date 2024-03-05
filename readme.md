# PLAYWRIGHT POC

## Initiate a project

### Pre-conditions

1. nvm > Node Version Manage ( optional )
    -  https://github.com/nvm-sh/nvm
    - ``nvm --version``

2. nodejs > cross-platform JavaScript runtime environment
    - ``nvm ls-remote``
    - ``nvm ls``
    - ``nvm use ``
    - ``nvm current``
    - ``nvm install --lts``
    - ``nvm install 00.0.0``
    - ``nvm install-latest-npm``
    - ``nvm alias default 20.11.1``

3. npm  >  package manager for the JavaScript programming language.
    - ``nvm install-latest-npm``
    - `` npm -v``

---

### Playwright Install 
- https://playwright.dev/docs/intro#installing-playwright
- ``npm init playwright@latest`` > Install as Typescript as default with all supported browser (chromium, chrome, msedge,firefox, webkit)
- ``npx playwright test`` > Runs the end-to-end tests.
- ``npx playwright test --ui`` > Starts the interactive UI mode.
- ``npx playwright test --project=chromium`` > Runs the tests only on Desktop Chrome.
- ``npx playwright test example`` > Runs the tests in a specific file.
- ``npx playwright test --debug`` > Runs the tests in debug mode.
- ``npx playwright codegen`` > Auto generate tests with Codegen.


### Typescript Lint -  static code analysis tool 
- https://typescript-eslint.io/getting-started
- https://github.com/typescript-eslint/typescript-eslint
- https://github.com/microsoft/playwright/blob/main/.eslintrc.js
- https://github.com/jsx-eslint/eslint-plugin-react
- https://github.com/playwright-community/eslint-plugin-playwright

- ``npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin  eslint typescript`` > eslint for typescript
- ``npm install eslint-plugin-react-hooks@latest --save-dev`` > eslint-plugin-react-hooks
- ``npm install -D eslint-plugin-playwright`` > eslint-playwright
- ``npx eslint .`` > Running ESLint
- ``npx eslint . --fix`` > Running fix ESLint


