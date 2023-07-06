import { expect, request, test } from '@playwright/test';
import fs from 'fs';

const mondrianFilePath = '/Users/joaogoncalves/Downloads/SteelWheels.mondrian.xml';
const apiURLpostAnalysis = 'http://localhost:8080/pentaho/plugin/data-access/api/mondrian/postAnalysis';
const mondrianFile = fs.readFileSync(mondrianFilePath, 'utf-8');
const mondriamFileStream = fs.createReadStream(mondrianFilePath);

test.describe('api submit schema mondrian', () => {

    test.skip('as multipart', async () => {
        const req = await request.newContext();

        const response = req.post(apiURLpostAnalysis,
            {
                headers: {
                    Accept: "*/*",
                    'Content-Type': 'multipart/form-data',
                },
                multipart: {
                    uploadAnalysis: mondriamFileStream,
                    'parameters': 'Datasource="SampleData";overwrite=true',
                    'csrf_token_disabled': true,
                },
            }
        );
        expect.soft(await response).toBeOK();
    });

    test('as multipart no content type', async () => {
        const req = await request.newContext();

        const response = req.post(apiURLpostAnalysis,
            {
                headers: {
                    Accept: "*/*"
                },
                multipart: {
                    uploadAnalysis: mondriamFileStream,
                    'parameters': 'Datasource="SampleData";overwrite=true',
                    'csrf_token_disabled': true,
                },
            }
        );
        expect.soft(await response).toBeOK();
    });

    // as a form
    test.skip('as form', async () => {
        const req = await request.newContext();
        const response = req.post(apiURLpostAnalysis,
            {
                headers: {
                    Accept: "*\/*",
                    'Content-Type': 'multipart/form-data',
                },
                params: {
                    'EnableXmla': false,
                    'Datasource': 'SampleData'
                },
                form: {
                    'uploadAnalysis': mondriamFileStream,
                    'parameters': 'Datasource="SampleData";overwrite=true',
                    'csrf_token_disabled': true,
                }
            }
        );
        expect.soft(await response).toBeOK();
        //expect(await response.text()).toEqual(3);
    })


})
