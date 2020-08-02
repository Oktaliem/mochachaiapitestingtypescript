import { CreateNewEmployee } from '../steps/createnewemployee.steps';

describe("Create employee record",() =>{
    let user = new CreateNewEmployee;
    let response: any;

    it("TC04 - Create Employee Record", async function(){
        response = user.createEmployee("/api/v1/create");
        user.verifyEmployeeRecoredCreatedSuccessfully(await response);
    })

    afterEach(async function () {
        const addContext = require('mochawesome/addContext');
        addContext(this, {
            title: 'Result',
            value: {
                responseCode: (await response).status,
                header: (await response).header,
                responseBody: (await response).body,
            }
        });
    });
});