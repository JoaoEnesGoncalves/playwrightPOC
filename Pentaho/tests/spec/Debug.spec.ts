import { expect, test } from '@playwright/test'
import { Authentication } from '../../src/environment/Authentication'



test('Global Authentication', async ({ }) => {
    const auth = new Authentication
    const storageFile = '.storageState/admin_password_State.json'

    expect.soft(await auth.isAuthenticated(storageFile), 'should be authenticated').toBeTruthy()
})
