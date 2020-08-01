import { GetSingleEmployeeDataSteps } from '../steps/getasingleemployeedata.steps';

describe("Get Single Employee Data",() =>{
    let user = new GetSingleEmployeeDataSteps;
    let response: any;

    it("TC02 - Get One Employee Data", async function(){
        response = user.getSingleEmployeeInfo("/api/v1/employee/1");
        user.verifyOneEmployeeInformationReturnSuccessfully(await response);
    });

    it("TC03 - Get One Employee Data With Invalid id", async function(){
        response = user.getSingleEmployeeInfo("/api/v1/employee/b");
        user.verifyOneEmployeeInformationReturnSuccessfully(await response);
    });

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