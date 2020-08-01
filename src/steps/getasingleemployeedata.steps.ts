import * as chai from "chai";
import { expect, use } from "chai";
import * as request from 'superagent';
import chaiHttp = require("chai-http");
import { url } from "../constants/url.constant";


export class GetSingleEmployeeDataSteps{
    constructor(){}

    async getSingleEmployeeInfo(endpoint: string){
        let response: request.Response;
        response = await chai.use(chaiHttp).request(url.apiUrl).get(endpoint);
        return response;
    }

    verifyOneEmployeeInformationReturnSuccessfully(response: request.Response) {
        use(require('chai-json-schema-ajv'));
        expect(200).to.equal(response.status);
    
    }


}