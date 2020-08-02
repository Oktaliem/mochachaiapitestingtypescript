import * as chai from "chai";
import { expect, use } from "chai";
import * as request from 'superagent';
import chaiHttp = require("chai-http");
import { url } from "../constants/url.constant";
import { employee } from '../model/employee.jsonbuilder';
import faker = require('faker');

export class CreateNewEmployee{
constructor(){}

async createEmployee(endpoint: string){
    var name = faker.name.findName();
    var salary = "300"
    var age = "50";

    let request = new employee(name,salary,age);
    let response: request.Response;
    response = await chai.use(chaiHttp)
                         .request(url.apiUrl)
                         .post(endpoint)
                         .send(request);                     
    return response;
}

verifyEmployeeRecoredCreatedSuccessfully(response: request.Response) {
    use(require('chai-json-schema-ajv'));
    expect(200).to.equal(response.status);
    expect(response.body.status).to.equal("success");
    expect(response.body.data.name).to.be.exist;
    expect(response.body.data.salary).to.be.equal("300");
    expect(response.body.data.age).to.be.equal("50");
    expect(response.body.data.id).to.be.exist;
    expect(response.body.message).to.equal("Successfully! Record has been added.");
}

}