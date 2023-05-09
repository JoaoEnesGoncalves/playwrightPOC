import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/pentaho/Login');
  await page.getByText('Log in as an evaluator').click();
  await page.locator('#role-admin-panel').getByRole('button', { name: 'Log in' }).click();
  await page.frameLocator('[id="home\\.perspective"]').getByRole('button', { name: 'Create New' }).click();
  await page.frameLocator('[id="home\\.perspective"]').getByRole('button', { name: 'Analysis Report' }).click();
  await page.frameLocator('#frame_01676654224924').locator('#datasources').selectOption('11');
  await page.frameLocator('#frame_01676654224924').getByRole('button', { name: 'OK' }).click();
  await page.frameLocator('#frame_01676654224924').getByRole('button', { name: 'Report Options...' }).click();
  await page.frameLocator('#frame_01676654224924').getByText('x Report Options Blank cells Blank measures display as Show rows or columns with').click();
  await page.frameLocator('#frame_01676654224924').locator('body').press('Meta++');
  await page.frameLocator('#frame_01676654224924').locator('body').press('Meta++');
});
