import { test } from '@playwright/test';

test("access to the slider component", async ({page})  => {
    // authenticate cmoore user
    // access to the monitor logs page
    // scroll to slider
    await page.goto("dataflow-studio/dataflow-studio-app/dataflow-manager/#/dataflows"); 
    await page.waitForLoadState('domcontentloaded');
} );
