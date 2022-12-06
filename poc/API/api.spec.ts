import { test, expect } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';

const tokenURL = 'hscp-hitachi-solutions/keycloak/realms/default/protocol/openid-connect/token/';
const dataflowsURL = 'dataflow-studio/dataflow-studio-app/cxf/dataflow-manager/api/v1/dataflows?pageSize=1000';

let _token: string;

// n! override configs to in this suite run tests sequentially: just for example(avoid it)
test.describe.configure({ mode: 'serial' });

test('login', async ({ playwright, baseURL }) => {
    const login = await test.step('Log in', async () => {

        const requestContext = await playwright.request.newContext({});

        const _response = await requestContext.post(baseURL + tokenURL, {
            form: {
                'client_id': 'dataflow-studio-sso-client',
                'client_secret': '1DHBOerovmWYAzByAoesNswaKNqx8fMg',
                'username': 'cmoore',
                'password': 'cmoore',
                'grant_type': 'password'
            }
        });
        expect(_response.ok()).toBeTruthy();

        // n! Save storage state into the file. -> returns empty fields
        await requestContext.storageState({ path: 'state.json' });

        // n! extract values from a json    
        const _body = await _response.json();
        _token = _body.access_token;
    })
});

test('reuse a token', async ({ playwright, baseURL }) => {
    // n! token authentication
    const requestContext = await playwright.request.newContext({
        extraHTTPHeaders: {
            'Authorization': `Bearer ${_token}`
        }
    });


    const _response = await requestContext.get(baseURL + dataflowsURL);
    const _jsonBody = await _response.json();
    
    // Save storage state into the file.
    //await requestContext.storageState({ path: 'state.json' });

    // assert a json value
    expect(_jsonBody.totalRecordCount).toBe(0);

    // assert a json object
    expect(_jsonBody).toMatchObject({ listRecordCount: 0, pageRecords: [], totalRecordCount: 0 })

    console.log(_jsonBody);
}
);


