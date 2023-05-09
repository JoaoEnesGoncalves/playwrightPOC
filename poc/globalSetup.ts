import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from './POM/LoginPage';

async function globalSetup(config: FullConfig) {

    const browser = await chromium.launch();
    const page = await browser.newPage();

    LoginPage
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.summitCredentials('cmoore', 'cmoore');
    await page.context().storageState({ path: 'storageState.json' });
    await browser.close();

}

// export const test = baseTest.extend({ storageState: async ({ browser }, use, testInfo) => {
export default globalSetup;
