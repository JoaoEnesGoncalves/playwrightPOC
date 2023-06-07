import { expect, request } from '@playwright/test';


export class Generic {
  constructor() { }


  /**
    * delete the puc object (file, directory...)
    * @param fileId file id
    */
  async deleteFile(fileId: string) {
    const adminContext = await request.newContext();
    const deleteResponse = await adminContext.put('api/repo/files/delete', { data: fileId });
    await expect(deleteResponse).toBeOK();
  }

  /**
     * @param filePath
     * @returns specific PUC url path encode
     */
  getPUCPathEncoded(filePath: string): string {
    return filePath.replace(new RegExp('/', 'g'), '%3A',);
  }


}
