import { expect, test } from '@playwright/test'
import { Report } from '../../src/api/analyzer/Report'
import { EnvConst } from '../../src/environment/EnvConst'
import { ReportEditMode } from '../../src/pages/analyzer/ReportEditMode'


const pucReportPath = '/home/admin/testReportx'
const report = new Report
const resourceReport = EnvConst.RESOURCES_DIRECTORY + 'reports/TerritorySales.xml'


test('Filter select from a list - includes vs excludes', async ({ page }) => {
    await test.step(`Create report ${pucReportPath}`, async () => {
        await report.createReport(pucReportPath, resourceReport)
    })

    await test.step(`UI script to open an analyzer report ${pucReportPath}`, async () => {
        const reportEditMode = new ReportEditMode(page, pucReportPath)
        await reportEditMode.goTo()
    })
})


test.afterAll(async ({ }) => {
    await test.step(`delete report ${pucReportPath}`, async () => {
        await report.deleteReport(pucReportPath)
    })
})
