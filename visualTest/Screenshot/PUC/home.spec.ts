import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/Login';
import { MainMenu } from '../../src/pages/MainMenu';
import { Homepage } from '../../src/pages/Homepage';

let viewportWidth = 1920;
let viewportHeight = 1080;
let theme = process.env.theme; // Crystal Sapphire Ruby


test.describe('PUC Home page', () => {

  test('PUC Home page', async ({ page, browser }) => {
    const loginPage = new LoginPage(page);
    const mainMenu = new MainMenu(page);


    let screenshotName = viewportWidth + "x" + viewportHeight + "-" + theme + "_" + browser.version() + ".png";
    
    await page.setViewportSize({ width: viewportWidth, height: viewportHeight, });
    await loginPage.logInAsAnEvaluatorAdmin();
    await mainMenu.changeThemeTo(theme);

    await expect(page).toHaveScreenshot( screenshotName, { maxDiffPixelRatio: 0.01 });
  });

});

