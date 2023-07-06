import type { Page } from '@playwright/test';
import { test } from '@playwright/test';
import { ReportTable, EnumColumnOptions } from './ReportTable';
import { FilterDialogTypeText } from './dialogs/filter/text/FilterDialogTypeText';
import type { FilterTextType } from './dialogs/filter/text/FilterTextType';
import { FilterTextClass } from './dialogs/filter/text/FilterTextType';

export class ReportTableSteps {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  /**
     * dummy high-level user action
     * for now, just works for the filter type text from a list filters
     * @param filterExpression
     */
  async setFilterAs(filterExpression: string): Promise<void> {
    const filterTextClass = new FilterTextClass();
    const table = new ReportTable(this.page);
    const filterText: FilterTextType = filterTextClass.parseTextFilter(filterExpression);

    await test.step(`open ${filterText.column} column`, async () => {
      await table.openColumnContextMenu(filterText.column);
      await table.selectOption(EnumColumnOptions.FILTER)
    });

    await test.step(`apply filter include ${filterText.values}`, async () => {
      const filterDialog = new FilterDialogTypeText(this.page);
      await filterDialog.setClauseFromList(filterText.clause);
      await filterDialog.pickAvailableValues(filterText.values);
      await filterDialog.confirmFilter();
    });

    await test.step(`assert the filter expression on page`, async () => {
      await table.clickShowHideFilter();
      await table.isVisibleFilterExpression(filterExpression);
    });
  }

}
