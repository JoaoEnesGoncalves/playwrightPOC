import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { Generic as ApiGeneric } from '../../api/Generic';
import { EnvConst } from '../../environment/EnvConst';


const api = new ApiGeneric();


export class ReportEditMode {
  readonly page: Page;
  readonly path: string;
  readonly refreshReportProgressPanel: Locator;

  constructor(page: Page, path: string) {
    this.page = page;
    this.path = EnvConst.BASE_URL + 'api/repos/' + api.getPUCPathEncoded(path) + '.xanalyzer/editor?ts=0';
    this.refreshReportProgressPanel = page.locator('#progressTooltipDiv')
  }

  async goTo() {
    const response = await this.page.goto(this.path, { waitUntil: 'domcontentloaded' });
    expect(response?.status()).toBe(200);
  }

  async waitForReportRefresh(){
    await this.refreshReportProgressPanel.isVisible();
    await expect(this.refreshReportProgressPanel).toHaveCount(0);
  }

  async assertTableText(tableText: string[]) {
    await this.waitForReportRefresh();
    const allInnerTexts = await this.page.locator('#pivotTable  td[type]').allInnerTexts();
    expect(allInnerTexts).toEqual(tableText);
  }


}
