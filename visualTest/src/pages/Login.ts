import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly buttonLogInAsAnEvaluator: Locator;
    readonly buttonLogInAdmin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonLogInAsAnEvaluator = page.getByText('Log in as an evaluator');
        this.buttonLogInAdmin = page.getByRole('button', { name: 'Login As Administrator' });         
    }

    async logInAsAnEvaluatorAdmin() {
        await this.page.goto('http://localhost:8080/pentaho/Login');
        await this.buttonLogInAsAnEvaluator.click();
        await this.buttonLogInAdmin.click();
    }

}
