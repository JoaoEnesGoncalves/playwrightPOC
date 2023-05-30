import { expect, request } from '@playwright/test';
import { Generic } from '../Generic';
import fs from 'fs'


const generic = new Generic


export class Report {
    constructor() { }


    private readonly apiURLSaveReport = 'api/repos/xanalyzer/service/ajax/saveReport'

    // TODO: how different users can call this method

    /**
     * create a simple analyzer report base on local file report
     * @param pucFilePath report file path
     * @localReport local report file path
     */
    async createReport(pucFilePath: string, localReport: string) {
        const req = await request.newContext()

        // PUC path format
        const pathStrSplit = pucFilePath.split('/')
        const name = pathStrSplit.pop()

        const report = fs.readFileSync(localReport, 'utf-8');
        const response = await req.post(this.apiURLSaveReport,
            {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept-Encoding': 'gzip, deflate, br'
                },
                form: {
                    'action': 'saveAs',
                    'name': name,
                    'path': pucFilePath,
                    'reportXML': report,
                    'time': 1683883038613
                }
            })

        await expect(response).toBeOK()
        expect(await response.text()).toContain('successfullySavedReport')
    }

    /**
     * delete the report file of given path
     * @param filePath report file path
     */
    async deleteReport(filePath) {
        const pathEncoded = generic.getPUCPathEncoded(filePath)
        const newContext = await request.newContext()

        // get the file id
        const propertiesResponse = await newContext.get('api/repo/files/' + pathEncoded + '.xanalyzer/properties',
            {
                headers: {
                    'Accept': 'application/json'
                }
            })
        await expect(propertiesResponse).toBeOK()

        console.log( await propertiesResponse.statusText() )
        const fileId = (await propertiesResponse.json()).id

        // delete by id
        await generic.deleteFile(fileId)
    }


}
