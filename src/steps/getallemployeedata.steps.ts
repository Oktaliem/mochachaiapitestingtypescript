import * as chai from "chai";
import { expect, use } from "chai";
import * as request from 'superagent';
import chaiHttp = require("chai-http");
import { url } from "../constants/url.constant";
import { GetAllEmployees } from "../constants/getallemployee.jsonschema";


export class GetAllEmployeeDataSteps{
    constructor(){}

    async getGetAllEmployee(endpoint: string){
        let response: request.Response;
        response = await chai.use(chaiHttp)
                             .request(url.apiUrl)
                             .get(endpoint);
        return response;
    }

    verifyAllEmployeeDataReturnCorrectly(response: request.Response) {
        use(require('chai-json-schema-ajv'));
        expect(200).to.equal(response.status);
        expect(response).to.be.json;
        expect(response.body.status).to.equal("success");
        expect(response.body.data[0].id).to.equal(1);
        expect(response.body.data[0].employee_name).to.equal("Tiger Nixon");
        expect(response.body.data[0].employee_salary).to.be.exist;
        expect(response.body.data[0].employee_age).to.be.exist;
        expect(response.body.data[0].profile_image).to.be.exist;
        expect(response.body.message).to.equal("Successfully! All records has been fetched.");
        const schema = GetAllEmployees.getSchema();
        expect(JSON.parse(response.text)).to.be.jsonSchema(schema);
    }

};