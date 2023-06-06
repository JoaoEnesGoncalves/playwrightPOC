
import { Given, Then, When } from '@cucumber/cucumber';
import { ReportEditMode } from '../../src/pages/analyzer/ReportEditMode'
const pucReportPath = '/home/admin/testReportx'


Given('Given Admin user opened the Analyzer Report', async ({ page },) => {
    const reportEditMode = new ReportEditMode(page, pucReportPath)
    await reportEditMode.goTo()
});
