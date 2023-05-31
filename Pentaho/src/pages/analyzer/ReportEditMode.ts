import { Locator, Page, expect } from '@playwright/test';
import { Generic as ApiGeneric } from '../../api/Generic';
import { EnvConst } from '../../environment/EnvConst';


const api = new ApiGeneric


export class ReportEditMode {
    readonly page: Page
    readonly path: string
    readonly buttonReportOptions: Locator

    constructor(page: Page, path: string) {
        this.page = page
        this.path = EnvConst.BASE_URL + 'api/repos/' + api.getPUCPathEncoded(path) + '.xanalyzer/editor?ts=0'
    }

    async goTo() {
        const response = await this.page.goto(this.path, { waitUntil: "domcontentloaded" })
        expect(response?.status()).toBe(200)
    }
}
