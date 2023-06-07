import { expect, test } from '@playwright/test';
import { Authentication } from '../../src/environment/Authentication';
import { Report } from '../../src/api/analyzer/Report';
import { EnvConst } from '../../src/environment/EnvConst';


test.skip('Global Authentication', async ({ }) => {
  const auth = new Authentication();
  const storageFile = '.storageState/admin_password_State.json';

  expect.soft(await auth.isAuthenticated(storageFile), 'should be authenticated').toBeTruthy();
});


test.skip('create and Delete an Analyzer report', async ({ }) => {
  const report = new Report();
  const pucReportPath = '/home/admin/testReportx';
  const resourceReport = EnvConst.RESOURCES_DIRECTORY + 'reports/TerritorySales.xml';

  await test.step(`Create report ${pucReportPath}`, async () => {
    await report.createReport(pucReportPath, resourceReport);
  });

  await test.step(`delete report ${pucReportPath}`, async () => {
    await report.deleteReport(pucReportPath);
  });
});


test.describe.skip('test parallelism', () => {
  test.beforeAll(async ({ }, testinfo) => {
    console.log('beforeAll');
    console.log(testinfo.testId);
    console.log('process.env.TEST_WORKER_INDEX = ' + process.env.TEST_WORKER_INDEX);
    console.log('process.env.TEST_PARALLEL_INDEX = ' + process.env.TEST_PARALLEL_INDEX);
    console.log('\n\n');
  });

  test('test 0', async ({ }, testinfo) => {
    console.log('test 0');
    console.log(testinfo.testId);
    console.log('process.env.TEST_WORKER_INDEX = ' + process.env.TEST_WORKER_INDEX);
    console.log('process.env.TEST_PARALLEL_INDEX = ' + process.env.TEST_PARALLEL_INDEX);
    console.log('\n\n');
  });

  test('test 1', async ({ }, testinfo) => {
    console.log('test 1');
    console.log(testinfo.testId);
    console.log('process.env.TEST_WORKER_INDEX = ' + process.env.TEST_WORKER_INDEX);
    console.log('process.env.TEST_PARALLEL_INDEX = ' + process.env.TEST_PARALLEL_INDEX);
    console.log('\n\n');
  });

  test.afterAll(async ({ }, testinfo) => {
    console.log('afterAll');
    console.log(testinfo.testId);
    console.log('process.env.TEST_WORKER_INDEX = ' + process.env.TEST_WORKER_INDEX);
    console.log('process.env.TEST_PARALLEL_INDEX = ' + process.env.TEST_PARALLEL_INDEX);
    console.log('\n\n');
  });
});
