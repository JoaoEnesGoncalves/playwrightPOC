import { Locator, Page } from '@playwright/test';

export class Homepage {
    readonly page: Page;
    readonly buttonCreateNew: Locator;
    readonly optionAnalysisReport: Locator;
    readonly listDatasource: Locator;
    readonly buttonConfirm: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonCreateNew = page.frameLocator('[id="home\\.perspective"]').getByRole('button', { name: 'Create New' });
        this.optionAnalysisReport = page.frameLocator('[id="home\\.perspective"]').getByRole('button', { name: 'Analysis Report' });
        this.listDatasource = page.frameLocator('#pucContent iframe[id*=frame]').locator('#datasources');
        this.buttonConfirm = page.frameLocator('#pucContent iframe[id*=frame]').getByRole('button', { name: 'OK' });
    }

    async createAnalysisReport() {
        await this.buttonCreateNew.click();
        await this.optionAnalysisReport.click();
        await this.listDatasource.selectOption("5");
        await this.buttonConfirm.click();
    }

}

