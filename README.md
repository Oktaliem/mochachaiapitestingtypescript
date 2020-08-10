<h1 align="center"><img src="https://user-images.githubusercontent.com/26521948/72658109-63a1d400-39e7-11ea-9667-c652586b4508.png" alt="Apache JMeter logo" /></h1>
<h4 align="center">SOFTWARE TESTING ENTHUSIAST</h4>
<br>

# REST API Testing with Typescript
REST API Testing with Typescript + Mocha + Chai Framework

## Precondition
- Node.js is installed
- Npm is installed


## Generate report

Mochaawesome Report - update package.json before run the test (Default Setting)
```
"scripts": {
    "test": "mocha -r ts-node/register src/specs/**/*.ts --reporter mochaawesome"
  },
```

Allure Report - update package.json before run the test (Alternative)
```
"scripts": {
    "test": "mocha -r ts-node/register src/specs/**/*.ts --reporter mocha-allure-reporter"
  },
```

## How to run the test
- Download this repository, run these syntax below :

```
$ npm install
$ npm test
```
## Test Report Sample
```
{path}/mochachaiapitestingtypescript/mochawesome-report/mochawesome.html
```
![image](https://user-images.githubusercontent.com/26521948/89772896-6ad03100-db35-11ea-8ae9-1a6c3fd020b6.png)

![image](https://user-images.githubusercontent.com/26521948/89772945-820f1e80-db35-11ea-8b07-2922aba57a6f.png)

## References
- https://mochajs.org/
- https://visionmedia.github.io/superagent/
- https://www.chaijs.com/
- https://www.chaijs.com/plugins/chai-http/
- https://extendsclass.com/json-schema-validator.html
- https://codebeautify.org/jsonviewer


## Testing Log Sample
<details>
<summary>
Log
</summary>
<p>

```node
> mochachaiapitestingtypescript@1.0.0 test /home/okta/Documents/GitHub/mochachaiapitestingtypescript
> mocha -r ts-node/register src/specs/**/*.ts --reporter mochawesome --timeout 10000



  Create employee record
    ✓ TC04 - Create Employee Record (4213ms)

  Get All Employee Data
    ✓ TC01 - Get All Employee Data (1243ms)

  Get Single Employee Data
    ✓ TC02 - Get One Employee Data (1174ms)
    ✓ TC03 - Get One Employee Data With Invalid id (1017ms)


  4 passing (8s)

[mochawesome] Report JSON saved to /home/okta/Documents/GitHub/mochachaiapitestingtypescript/mochawesome-report/mochawesome.json

[mochawesome] Report HTML saved to /home/okta/Documents/GitHub/mochachaiapitestingtypescript/mochawesome-report/mochawesome.html

```

