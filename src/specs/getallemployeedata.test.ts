import { GetAllEmployeeDataSteps } from "../steps/getallemployeedata.steps"


describe("Get All Employee Data",() =>{
    let user = new GetAllEmployeeDataSteps;
    let response: any;

    it("TC01 - Get All Employee Data", async function(){
        response = user.getGetAllEmployee("/api/v1/employees");
        user.verifyAllEmployeeDataReturnCorrectly(await response);
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