import * as chai from "chai";
import { expect, use } from "chai";
import * as request from 'superagent';
import chaiHttp = require("chai-http");
import { url } from "../constants/url.constant";
import { GetOneEmployee } from '../constants/getoneemployee.jsonschema';


export class GetSingleEmployeeDataSteps{
    constructor(){}

    async getSingleEmployeeInfo(endpoint: string){
        let response: request.Response;
        response = await chai.use(chaiHttp).request(url.apiUrl).get(endpoint);
        return response;
    }

    verifyOneEmployeeInformationReturnSuccessfully(response: request.Response, status: string) {
        use(require('chai-json-schema-ajv'));
        expect(200).to.equal(response.status);
        expect(response).to.be.json
        expect(response.body.status).to.equal("success");
        if (status == "invalid"){
            expect(response.body.data).to.equal(null);
        }else{
            expect(response.body.data.id).to.equal(1);
            expect(response.body.data.employee_name).to.equal("Tiger Nixon");
            expect(response.body.data.employee_salary).to.equal(320800);
            expect(response.body.data.employee_age).to.equal(61);
            expect(response.body.data.profile_image).to.equal("");
            const schema = GetOneEmployee.getSchema();
            expect(JSON.parse(response.text)).to.be.jsonSchema(schema);
        }
        expect(response.body.message).to.equal("Successfully! Record has been fetched.");
    }

}