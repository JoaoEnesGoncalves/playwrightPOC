import { test } from '@playwright/test';
import { Report } from '../../src/api/analyzer/Report';
import { EnvConst } from '../../src/environment/EnvConst';
import { ReportEditMode } from '../../src/pages/analyzer/ReportEditMode';
import { ReportTableSteps } from '../../src/pages/analyzer/ReportTableSteps';


const report = new Report();
const pucReportPath = '/home/admin/testReportx';
const resourceReport = EnvConst.RESOURCES_DIRECTORY + 'reports/TerritorySales.xml';
const filters = ['Territory excludes APAC, Japan, NA and Not Available',
  'Territory includes EMEA'];
const table = ['Territory', 'Sales', 'EMEA', '5,008,224'];


test.describe.configure({ mode: 'parallel' });
test.describe('Filter select from a list - includes vs excludes', () => {

  for (const index in filters) {
    test(`Filter by text type for${filters[index]}`, async ({ page }, testinfo) => {
      const pucPathReportID = pucReportPath + testinfo.testId;

      await test.step(`Create report ${pucPathReportID}`, async () => {
        await report.createReport(pucPathReportID, resourceReport);
      });

      const reportEditMode = new ReportEditMode(page, pucPathReportID);

      await test.step(`Given Admin user opened the Analyzer Report ${pucPathReportID}"`, async () => {
        await reportEditMode.goTo();
      });

      await test.step(`When Admin user filter the report by: ${filters[index]}`, async () => {
        const tableSteps = new ReportTableSteps(page);
        await tableSteps.setFilterAs(filters[index]);
      });

      await test.step(`Then the report table should be: ${table}`, async () => {
        await reportEditMode.assertTableText(table);
      });

    });
  }

  test.afterAll(async ({ }, testinfo) => {
    await test.step(`delete report ${pucReportPath}`, async () => {
      await report.deleteReport(pucReportPath + testinfo.testId);
    });
  });


});
