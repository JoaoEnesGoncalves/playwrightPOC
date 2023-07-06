import { expect, request, test } from '@playwright/test';
import { EnumColumnOptions } from '../../src/pages/analyzer/ReportTable';
import fs from 'fs';

test.describe('hyperlink', () => {

  const apiURLpostAnalysis = 'http://localhost:8080/pentaho/plugin/data-access/api/mondrian/postAnalysis';
  const mondrianFilePath = '/Users/joaogoncalves/Downloads/SteelWheels.mondrian.xml';
  const mondriamFileStream = fs.createReadStream(mondrianFilePath);

  test('Default Hyperlink', async ({ page }) => {
    const frameHome = page.frameLocator('[id="home\\.perspective"]');
    const frameFirst = page.frameLocator('iframe[name="frame_0"]');


/*      test.step(`set steelWheels data source Import Analysis via UI`, async () => {
      await page.goto('http://localhost:8080/pentaho/Home');
      await frameHome.getByRole('button', { name: 'Manage Data Sources' }).click();
      await page.getByRole('row', { name: 'SteelWheels Analysis', exact: true }).getByText('Analysis').click();
      await page.getByRole('button', { name: 'Data Sources Options...' }).click();
      await page.getByRole('menuitem', { name: 'Import Analysis...' }).click();

      await page.locator('#connectionList').click();
      await page.locator(' .drop-popup').getByText('SampleData').click()
      await page.locator('[id*=FileUpload]').setInputFiles(mondrianFilePath);

      await page.getByRole('button', { name: 'Import' }).click();
      await page.getByRole('button', { name: 'Ok' }).click();
      await page.getByRole('button', { name: 'Close' }).click();
      await page.locator('#datasourceAdminDialog_cancel').click();
    }) */

    test.step(`set steelWheels data source Import Analysis via API`, async () => {
      const req = await request.newContext();

      const response = req.post(apiURLpostAnalysis,
        {
          headers: {
            Accept: "*/*"
          },
          multipart: {
            uploadAnalysis: mondriamFileStream,
            'parameters': 'Datasource="SampleData";overwrite=true',
            'csrf_token_disabled': true,
          },
        }
      );
      expect.soft(await response).toBeOK();
    })

    await test.step(`create new report`, async () => {
      await page.goto('http://localhost:8080/pentaho/Home');
      await frameHome.getByRole('button', { name: 'Create New' }).click();
      await frameHome.getByRole('button', { name: 'Analysis Report' }).click();
      await frameFirst.locator('#datasources').locator('option[title*=SteelWheels]').click();
      await frameFirst.getByRole('button', { name: 'OK' }).click();
    })

    await test.step(`drag customer field`, async () => {
      await frameFirst.getByText('Customer (6)').dblclick();

      const refreshReportProgressPanel = frameFirst.locator('#progressTooltipDiv');
      await refreshReportProgressPanel.isVisible();
      await expect(refreshReportProgressPanel).toHaveCount(0);
    })

    await test.step(`assert customer links count`, async () => {
      await frameFirst.locator('td[formula*=Customer] a ').first().isVisible();
      const customersLinksCount = await frameFirst.locator('td[formula*=Customer] a ').count();
      expect(customersLinksCount).toBeGreaterThanOrEqual(122);
    })

    await test.step(`open hyperlink dialog`, async () => {
      await frameFirst.locator('table').getByTitle('Customer').click({
        // await frameFirst.locator('#RPT001ReportArea td[title=Customer]').click({
        button: 'right'
      });
      await frameFirst.getByRole('cell', { name: EnumColumnOptions.HYPERLINK }).click();
    })

    await test.step(`assert hyperlink dialog default link`, async () => {
      await frameFirst.locator('input#AL_enableCheckbox').isDisabled();
      const urlInputValue = await frameFirst.locator('#AL_urlInput').inputValue();
      expect(urlInputValue).toEqual('https://google.com/?t=ffab&q={Customer}')
    })
  });


}
);
