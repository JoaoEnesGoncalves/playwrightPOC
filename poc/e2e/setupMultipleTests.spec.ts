import { test } from '@playwright/test';
import { HeaderComponents } from '../POM/headerComponent';
import { LoginPage } from '../POM/loginPage';


test.describe('Test the setups with fixtures', () => {
  let loginPage;
  let headerComponents;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    headerComponents = new HeaderComponents(page);

    await loginPage.goto();
    await loginPage.summitCredentials('cmoore', 'cmoore');
    await headerComponents.assertAuthentication();
  }
  );

  test.afterEach(async ({ page }) => {
    await headerComponents.logOut();
  });

  test('navigate to Monitoring', async ({ page }) => {
    await headerComponents.headerNavigateTo('Monitoring');
  });

  test('navigate to Schedule', async ({ page }) => {
    await headerComponents.headerNavigateTo('Schedules');
  });

  test('navigate to Dataflows', async ({ page }) => {
    await headerComponents.headerNavigateTo('Dataflows');
  });

});
