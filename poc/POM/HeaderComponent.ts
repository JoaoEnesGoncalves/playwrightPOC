import { expect, Locator, Page } from '@playwright/test';

export class HeaderComponents {
    readonly page: Page;
    readonly headerUserAction: Locator;
    readonly headerLogOut: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerUserAction = page.locator('[name=User]');
        this.headerLogOut = page.getByRole('button', { name: 'Logout' });
    }

    async assertAuthentication() {
        await this.headerUserAction.click();
        await expect(this.headerLogOut).toBeVisible();
    }

    async headerNavigateTo(title: string) {
        await this.page.getByRole('button', { name: title }).click();
    }

    async logOut() {
        await this.headerUserAction.click();
        await this.headerLogOut.click();
    }
}
