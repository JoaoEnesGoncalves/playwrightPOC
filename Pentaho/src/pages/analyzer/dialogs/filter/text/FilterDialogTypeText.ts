
import { Page } from '@playwright/test';
import { EnumClauses } from './EnumClauses';

export class FilterDialogTypeText {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
     * select the option to filter clause
     * @param clause includes or excludes
     */
    async setClauseFromList(clause: string) {
        if (clause == EnumClauses.INCLUDES) {
            await this.page.locator('#FT_picklistOp').selectOption('EQUAL');
        } else if (clause == EnumClauses.EXCLUDES) {
            await this.page.locator('#FT_picklistOp').selectOption('NOT_EQUAL');
        }
    }

    /**
     * move values from available list to the selected list
     * @param values
     */
    async pickAvailableValues(values: string[]) {
        for (const index in values) {
            await this.page.getByRole('option', { name: values[index] }).dblclick();
        }
    }

    async confirmFilter() {
        await this.page.getByRole('button', { name: 'OK' }).click();
    }

}
