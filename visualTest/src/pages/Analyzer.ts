import { Locator, Page } from '@playwright/test';

export class Analyzer {
    readonly page: Page;
    readonly buttonReportOptions: Locator;
    readonly fieldBlankCells: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonReportOptions = page.frameLocator('#pucContent iframe[id*=frame]').getByRole('button', { name: 'Report Options...' });
        this.fieldBlankCells = page.frameLocator('#pucContent iframe[id*=frame]').getByRole('cell', { name: 'Blank cells' });
    }

    async openReportOptionsDialog() {
        await this.buttonReportOptions.click();
        await this.fieldBlankCells.click();
    }

}
