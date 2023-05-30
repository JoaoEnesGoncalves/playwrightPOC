import { expect, test } from '@playwright/test'
import { Authentication } from '../../src/environment/Authentication'
import { Report } from '../../src/api/analyzer/Report'
import { EnvConst } from '../../src/environment/EnvConst'


test('Global Authentication', async ({ }) => {
    const auth = new Authentication
    const storageFile = '.storageState/admin_password_State.json'

    expect.soft(await auth.isAuthenticated(storageFile), 'should be authenticated').toBeTruthy()
})


test('create and Delete an Analyzer report', async ({ }) => {
    const report = new Report
    const pucReportPath = '/home/admin/testReportx'
    const resourceReport = EnvConst.RESOURCES_DIRECTORY + 'reports/TerritorySales.xml'

    await test.step(`Create report ${pucReportPath}`, async () => {
        await report.createReport(pucReportPath, resourceReport)
    })

    await test.step(`delete report ${pucReportPath}` , async () => {
        await report.deleteReport(pucReportPath)
    })
})
