import { Locator, Page, expect } from '@playwright/test';

export class MainMenu {
    readonly page: Page;
    readonly menuView: Locator;
    readonly itemThemes: Locator;
    readonly buttonConfirmChange: Locator;
    readonly dialogLoading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuView = page.getByRole('menuitem', { name: 'View' });
        this.itemThemes = page.getByRole('menuitem', { name: 'Themes' });
        this.buttonConfirmChange = page.getByRole('button', { name: 'Yes, Change Theme' });
        this.dialogLoading = page.locator('.pentaho-busy-indicator-spinner');

    }

    async waitLoadingEnd() {
        await this.dialogLoading.click();
        await expect(await this.dialogLoading).toBeHidden();
    }

    async changeThemeTo(theme) {
        await this.menuView.click();
        await this.itemThemes.dblclick();
        await this.page.getByRole('menuitem', { name: theme }).click();
        await this.buttonConfirmChange.click();
        await this.waitLoadingEnd();
    }

}
