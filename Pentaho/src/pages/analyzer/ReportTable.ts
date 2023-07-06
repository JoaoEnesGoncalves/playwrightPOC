import type { Page } from '@playwright/test';

export enum EnumColumnOptions {
  FILTER = 'Filter...',
  HYPERLINK = 'Hyperlink...',
}

export class ReportTable {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  /**
     * Open the chosen column context Menu
     * @param column Column title
     */
  async openColumnContextMenu(column: string) {
    await this.page.locator('table').getByTitle(column).click({
      button: 'right'
    });
  }

  async selectOption( option: EnumColumnOptions) {
    await this.page.getByRole('cell', { name: option }).click();
  }

  async clickShowHideFilter() {
    await this.page.getByRole('button', { name: 'Click to show/hide filters (Ctrl+Alt+T)' }).click();
  }

  /**
     * assert if the given filter expression text is visible on page
     * @param filterExpression
     */
  async isVisibleFilterExpression(filterExpression: string) {
    await this.page.getByText(filterExpression).isVisible();
  }

}
