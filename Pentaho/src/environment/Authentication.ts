import { expect, request, FullConfig } from '@playwright/test';
import { EnvConst } from './EnvConst';


const BASE_URL = EnvConst.BASE_URL


export class Authentication {
    constructor() { }

    /**
     * @param user username
     * @param password password
     * @returns state file path of submitted credentials( user, password)
     */
    async getUserContext(user: string, password: string): Promise<string> {
        const req = await request.newContext({ baseURL: BASE_URL })
        const storageStateFile = EnvConst.getStateFile(user, password)

        const response = await req.post('j_spring_security_check', {
            form: {
                j_username: user,
                j_password: password,
            },
            ignoreHTTPSErrors: true
        })
        await expect(response).toBeOK();
        // Save storage state into the file.
        await req.storageState({ path: storageStateFile })

        return storageStateFile
    }


    /**
     * @param storageStateFile the state file path
     * @returns true if authenticated, else false
     */
    async isAuthenticated(storageStateFile: string): Promise<boolean> {
        const newContext = await request.newContext({ baseURL: BASE_URL, storageState: storageStateFile })
        const response = await newContext.get('api/mantle/isAuthenticated')
        const isAuthenticated = (await response.text()).toLowerCase()

        return (isAuthenticated === 'true')
    }


}
