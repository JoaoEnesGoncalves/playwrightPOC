export class EnvConst {
  static readonly BASE_URL = 'http://localhost:8080/pentaho/';
  static readonly ADMIN_USER = 'admin';
  static readonly DEFAULT_PASSWORD = 'password';
  static readonly STORAGE_DIRECTORY = '.storageState/';

  /**
     * @param user user name
     * @param password password
     * @returns the state file path for the user like ".storageState/admin_password_State.json"
     */
  static getStateFile(user: string, password: string) {
    return this.STORAGE_DIRECTORY + user + '_' + password + '_State.json';
  }
}
