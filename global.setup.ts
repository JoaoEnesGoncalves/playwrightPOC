import type { FullConfig } from '@playwright/test';
import { Authentication } from './Pentaho/src/environment/Authentication';
import { EnvConst } from './Pentaho/src/environment/EnvConst';
const authentication = new Authentication();


async function globalSetup(config: FullConfig) {
  authentication.getUserContext(EnvConst.ADMIN_USER, EnvConst.DEFAULT_PASSWORD);
}


export default globalSetup;
