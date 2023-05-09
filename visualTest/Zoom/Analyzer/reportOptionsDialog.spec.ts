import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/Login';
import { MainMenu } from '../../src/pages/MainMenu';
import { Homepage } from '../../src/pages/Homepage';
import { Analyzer } from '../../src/pages/Analyzer';

let viewportWidth = 1920;
let viewportHeight = 1080;
let theme = 'Ruby'; // Crystal Sapphire Ruby

test.describe('analyzer dialog', () => {

  test('analyzer dialog Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const mainMenu = new MainMenu(page);
    const home = new Homepage(page);
    const analyzer = new Analyzer(page);

    await page.setViewportSize({ width: viewportWidth, height: viewportHeight });

    await loginPage.logInAsAnEvaluatorAdmin();
    await mainMenu.changeThemeTo(theme);
    await home.createAnalysisReport();
    await analyzer.openReportOptionsDialog();
    await page.pause();

  });

});
