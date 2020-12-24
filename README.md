# Stellar Microservice
---

Cloud Native Node JS Express Reactive Microservice Starter Template (REST/GraphQL)
This project provides complete Node JS / Typescript based microservices template with all that will be needed features for production deployment , monitoring , debugging , logging , security , CI/CD. Reactive extensions based samples are added as well to demonstrate how this can be used for building a microservice API edge-service , a backend for frontend or use it as a base for building any kind of microservice.

# Table of contents

- [Design Principles](#design-principles)
- [Features](#features)
- [REST APIs](#rest-apis)
- [GraphQL APIs](#graphql)
- [GraphQL Client APIs](#graphql-client-apis)
- [Installation Prerequisites](#pre-requisites)
- [Installation](#install-it)
- [External Environment Configuration Details](#setup-external-environment)
- [Build Modes](#run-it)
  - [Development](#run-in-development-mode)
  - [Production](#run-in-production-mode)
  - [Debug in VSCode](#run-in-vs-code-debug-mode)
- [Tests](#runs-tests-with-code-coverage)
  - [Unit Tests](#run-unit-tests)
  - [Integration Tests](#run-integration-tests)
- [Run It](#try-it)
- [File Structure](#file-structure)
- [Passing UUID for requests](#log-with-uuid)
- [GraphQL Directives](#graphql-directives)
- [GraphQL Mocks](#graphql-mocks)
- [REST API Mocks](#restapi-mocks)
- [Docker Build](#build-docker-image)
- [Kubernetes Deployment](#k8s-deployment)
- [Debug Dashboard](#using-node-dashboard-view-development-only)
- [Security](#security)
  - [JWT GraphQL APIs](#jwt-security-graphql)
  - [JWT REST APIs](#jwt-security-rest-apis)
    - [Role Based Access](#rbac-test)
  - [CSRF](#csrf-security)
  - [Compression](#compression)
- [Hystrix Support](#hystrix-circuit-breaker-support)
- [Sonar Integration](#integrate-with-sonarqube-for-continous-code-quality)
- [Load Testing](#load-testing)
- [Future Roadmap](#future-roadmap)
- [Deploying to Heroku](#deploying-to-heroku)
- [FAQ](#faq)
- [License](#license)

## Design Principles

- Use best of breed modules to create a production ready microservice framework
- Based on the 12-factor app principles
- No custom code or wrappers so that any developer can modify/replace any of the modules or implementation
- Design patterns for implementation that can be used as a reference
- Modular , replacable and plug and play code
- Provide a starter for both the business APIs and microservice platform development.
- DevOps ready with code quality, unit & integration tests, deployment automated.

## Features

- Node JS, Express, Typescript , Dependency Injection base
- Backpack (webpack) based - build , development , packaging
- Swagger Enabled - Express swagger middleware / Swagger UI integration
- GraphQL based on Apollo Server 2.0 with JWT security , data loader and REST data source samples
- Support for GraphQL SDL via graphql-import
- GraphQL mock resolvers (optional) during development - graphql-tools
- GraphQL based client wrapper APIs - graphql-request
- REST APIs - using Inversify Controller
- Externalized Configuration - DotEnv (Settings, Env specific API URLs)
- Tests - Jest , SuperTest , GraphQL Tester. Infrastructure for automated unit and integration tests
- Code Coverage - Istanbul
- Code Quality - tslint
- Container support - Docker , Kubernetes Clusters
- Helm Chart based deployment support
- Prometheus integration
- API Response Logging , Express Server Logging , UUID propogation - Pino
- Reactive Extensions support - RxJS6
- CORS, JSONObject Limit , Helmet , CSRF - Express Security
- IOC / Dependency Injection / Express Annotation based APIs - Inversify
- Documentation - TypeDocs
- API Exception Handling Utilities
- Standard HTTP Codes for cleaner code
- Sample APIs, Patterns for reference
- Sonar Qube integration
- Hystrix Circuit Breaker Support (Using Brakes)
- JWT Based API Security - jsonwebtoken, express-jwt
- Now using the super fast pino logger for all logging needs
- Additional performance time logging built in

See REST API /examples/{id}

### REST APIs
- The API Spec can be downloaded using the following URLS
```
http://localhost:3000/v1/docs
```
```
http://localhost:3000/api-docs/
```
- examples - Basic examples with a search by ID example from the jsonplaceholder API (/examples/:id)
- shop - Example of how to use Reactive Extensions for API orchestration (FlatMap) (/shop/priceByOptionId/:id)
- starwars - Example of how to use Reactive Extensions for API orchestration (ForkJoin) (/starwars/people/:id)
- hystrix - Example of how to use the circuit break pattern for APIs (/hystrix)
- scraper - Example of how to use scrape-it to scrape data from a website (/scraper)
- Use swagger UI for the complete list of sample APIs
- metrics - Prometheus based metrics added for all APIs (/metrics)
- API Partial JSON response support

### GraphQL

- GraphQL support has been added based on the [apollo framework](https://github.com/apollographql) and a reference implementation (including the starwars apis from swapi.co)
  ![GraphQL](screenshots/graphql.png)
- Access the graphql playground from http://localhost:3000/playground
- Access the graphiql tool from http://localhost:3000/graphiql
- GraphQL API tracing (configurable)
- Dataloader for caching and batching
- VSCode Debug Launch Configuration (Preconfigured Debug Launcher added)
- Node Dashboard view added for telemetry during development process
- Added NodeJS cluster mode (load balanced workers)
  - When you start the server it adds workers based on the number of CPUs

```bash
Master cluster setting up 4 workers...
Worker 2828 is online
Worker 2816 is online
Worker 13956 is online
Worker 3756 is online
up and running in development @: LP-507B9DA1D355 on port: 3000
up and running in development @: LP-507B9DA1D355 on port: 3000
up and running in development @: LP-507B9DA1D355 on port: 3000
up and running in development @: LP-507B9DA1D355 on port: 3000
```

## Pre-requisites

Install npm and nodeJS

npm version >= 3.x
node version >= 6.x

## Install It

```bash
npm install
```

## Setup _external environment_

- Edit the **.{PROFILE}.env** file (where the PROFILE could be test, development , production)

| Variable              | Description                                                                                             | Default Value |
| --------------------- | ------------------------------------------------------------------------------------------------------- | ------------- |
| PORT                  | Server Port                                                                                             | 3000          |
| LOG_LEVEL             | Log Level (info,debug,error)                                                                            | info          |
| SESSION_SECRET        | String used for signing cookies                                                                         |               |
| API_TIME_OUT          | Default API Timeout (in milli secs)                                                                     | 10000         |
| TEST_TIME_OUT         | Default Test Timeout (in milli secs)                                                                    | 10000         |
| JWT_AUTH              | Enable/Disable JWT based API security                                                                   | true          |
| RSA_PRIVATE_KEY_FILE  | Sample RSA private key path                                                                             |               |
| RSA_PUBLIC_KEY_FILE   | Sample RSA public key path                                                                              |               |
| TOKEN_EXPIRY_TIME     | JWT Token expiry (Generated from /login )                                                               | 1 hour (1h)   |
| STREAM_HYSTRIX        | Enable/Disable Hystrix streaming server (true or false)                                                 | false         |
| CORS                  | Enable/Disable CORS on the server (true or false). Will work only in production build                   | false         |
| CLUSTER_MODE          | Enable/Disable Node Clustering on the server (true or false)                                            | false         |
| SWAGGER_API_DOCS_ROOT | Serves your Swagger API file(s) so they can be used with front-end tools like like Swagger UI, PostMan. | /api-docs/ |
| GRAPHQL_SUBSCRIPTIONS | Enable/Disable GraphQL subscriptions (true or false)                                                    | true          |
| GRAPHQL_PLAYGROUND    | Enable/Disable GraphQL Playground (true or false)                                                       | true          |
| GRAPHQL_TRACING       | Enable/Disable GraphQL tracing (true or false)                                                          | true          |
| GRAPHQL_MOCK          | Enable/Disable GraphQL Mock for unimplemented Interfaces(true or false)                                 | true          |
| API_MOCK              | Enable/Disable REST API Mock unimplemented routes(true or false)                                        | true          |

## Run It

### Run in _development_ mode

```bash
npm run dev
```

### Run in _production_ mode

```bash
npm run compile
npm start
```

#### Run in _VS Code debug_ mode

```bash
npm run compile
Press F5
```

#### Runs tests with code coverage

#### Run Unit Tests

- Unit Tests are located in the same directory as the module or class being tested
- All Unit tests need to have an extension \*.spec.ts

```bash
npm run test
```

#### Run Integration Tests

- Integration tests are located in the same directory as the module or class being tested
- All Unit tests need to have an extension \*.itest.ts
- First built the integration test . This will setup the integration test environment in the build

```bash
npm run itest:build
```

- Run the node server and run the integration tests against it
- This waits for the server to start , runs the test and then terminate all processes on completion

```bash
npm itest:run
```

### Try It

- Point you're browser to [http://localhost:3000](http://localhost:3000).
- Invoke the example REST endpoints directly or via swagger `http://localhost:3000/v2/docs`
- Invoke the prometheus metrics using the endpoint `curl http://localhost:3000/metrics`
- Access in-browser IDE for graphQL `http://localhost:3000/graphiql`
- Access the graphQL playground app `http://localhost:3000/playground/`
- Access the health check api `curl http://localhost:3000/healthcheck`

### File Structure

```
├───public                      * Landing page for nxplorer server
├───screenshots                 * Sample screenshots
└───server                      * Server configuration and apis
|   ├───api                     * REST APIs defined on the server
|   │   ├───controllers         * API controllers using RxJS, Inversify
|   │   │   ├───examples        * Examples controller
|   │   │   ├───hystrix-demo    * Hystrix demo controller
|   │   │   ├───security        * JWT login API controller
|   │   │   ├───shop            * Sample shop APIs with products, prices , inventory
|   │   │   └───starwars        * SWAPI controller
|   │   ├───interfaces          * Service interfaces
|   │   ├───models              * API data models
|   │   └───services            * Service API implementations
|   ├───common                  * Server setup and configuration
|   │   ├───config              * Server configuration
|   │   ├───constants           * Inversify and other common identifier constants
|   │   ├───interfaces          * Common service interfaces  
|   │   ├───middleware          * Custom middleware
|   │   ├───models              * Common API data models
|   │   ├───services            * Common service implementations
|   │   └───swagger             * Swagger API specification (YAML)
|   |   └───env.ts              * DotENV configuration
|   |   └───server.ts           * Express Server setup and configuration
|   └───graphql                 * GraphQL APIs defined on the server
|   |   ├───dataloader          * GraphQL data loader functions
|   |   ├───errors              * GraphQL error handler
|   |   ├───schema              * GraphQL Schema Types
|   |   ├───mocks               * GraphQL Mock Resolvers
|   |   └───resolvers           * GraphQL resolvers
|   |   └───setupSchema.ts      * GraphQL schema configuration
|   └───index.ts                * Main Server entry point
├───helm                        * Helm chart deployment scripts
│   ├───charts                  *
│   └───templates               *
└───backpack.config.js          * Backpack configuration
└───package.json                * npm dependencies
└───build.js                    * ShellJS utility build scripts
└───deploy-k8s.sh               * Kubernetes deployment script
└───Dockerfile                  * Docker build file
└───docker-compose.yml          * Docker build and run file
└───build-docker.bat|sh         * Docker build file
└───itest.config.json           * Jest integration test configuration
└───unit.config.json            * Jest unit test configuration
└───tsconfig.json               * typescript config
└───tslint.json                 * tslint config
└───.{profile}.env              * externalized environment files based on profiles (development,test,production)
└───sonar-properties.json       * sonarscanner|SonarQube configuration
└───jwtRS256.key|.key.pub       * Sample JWT private and public keys used by the server
```

### Log with UUID

- A sample implementation of UUID propogation has been added. This depends on a cookie 'UUID' to be set in the request object. The [LogService](server/common/services/log.service.ts) will add the uuid to all logs it generates.

### GraphQL Mocks

- As part of TDD we may need to mock the graphql responses till we are able to implement the resolvers
- The infrastructure is setup to add mocks only for the resolvers that are currently not implemented. Hence once the implementation is available the actual resolvers take over. Also incase there is a resolvers execution failure , then this will fall back on the mocked response. This feature must be used only during development, hence a check has been added to disable this feature in 'production' builds.
- To support that
  - Set the environemnt variable GRAPHQL_MOCK to true
  - Define the mock resolvers in the [mocks/index.ts](server/graphql/mocks/index.ts) file
- As a sample there are queries added examplesMock, peopleMock
- Sample output is given below

![Sample Mock output](screenshots/graphql_mock.PNG)

#### Build Docker image

```bash
./build-docker.sh
```

#### k8s deployment

- Helm chart based deployment

```bash
./deploy-k8s.sh
```

- A sample output

```bash
release "stellar-microservice" deleted
NAME:   stellar-microservice
LAST DEPLOYED: Fri Sep 22 22:10:58 2017
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/ConfigMap
NAME                          DATA  AGE
stellar-microservice-starter  5     1s

==> v1/Service
NAME                          CLUSTER-IP  EXTERNAL-IP  PORT(S)       AGE
stellar-microservice-starter  10.0.0.196  <nodes>      80:30316/TCP  1s

==> v1beta1/Deployment
NAME                          DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
stellar-microservice-starter  1        1        1           0          1s


NOTES:
1. Get the application URL by running these commands:
  export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services stellar-microservice-stellar-microservice-starter)
  export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")
  echo http://$NODE_IP:$NODE_PORT

Express Microservice is deployed at  http://192.168.99.100:30316/
```

#### Using node dashboard view (Development Only)

- To use the node dashboard view

```bash
npm run compile
npm run dash
```

- This will start up the application with the node dashboard attached providing details of the memory , cpu and logs

#### Security

- JWT based security has been implemented using [sample JWT private and public keys](https://gist.github.com/ygotthilf/baa58da5c3dd1f69fae9)
- Both the REST APIs and GraphQL have sample implementations added.
- The authentication middleware code can be viewed [here](server/common/middleware/auth-middleware.ts)

#### JWT Security GraphQL

- A demo implementation of JWT based security has enabled for one query "examples". Given below are the steps to test it out.
- If the JWT Security is enabled (environment variable JWT_AUTH is true) , we need to use the login mutation API to get the sample JWT Token (currently set at an expiry of 1 hour)
- Step 1 - use the login mutation to get the jwt token for a valid user. For demo purposes any email and password string can be provided. The role is optional. If not provided is defaults to the role 'USER'


![Login Mutation](screenshots/jwt_login_mutation.PNG)

- Step 2 - Verify if "examples" works without Authentication. It will give an error (Note: error handling needs to be improved but here we are only looking at the concept)

![UnSecure Query](screenshots/jwt_unauthenticated.PNG)

- Step 3 - Set the Authorization Header with the Bearer Token before executiong the "examples" query.

```
{
  "Authorization": "xxx.xxx.xxx"
}
```

![Secure Query](screenshots/jwt_authenticated.PNG)

#### JWT Security REST APIs

- If the JWT Security is enabled , we need to use the /login API to get the sample JWT Token (currently set at an expiry of 1 hour)

```bash
curl -X POST "http://localhost:3000/api/v1/login" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"email\": \"test@gmail.com\", \"password\": \"pwd\", \"role\": \"admin\"}"
```

- The sample output . Note the JWT token is the value of the property **idToken**

```json
{
  "idToken":
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1MTQ4NjQ3ODMsImV4cCI6MTUxNDg2ODM4Mywic3ViIjoidGVzdEBnbWFpbC5jb20ifQ.hAEa6AL1Kxxxxxxx",
  "expiresIn": "1h"
}
```

- The api/v1/examples APIs a valid JWT token must be passed in all the queries in the ‘Authorization’ header. Note this is done just as an example. You can easily enable addition endpoints similarly.
  - Please see the [examples controller](server/api/controllers/examples/controller.ts)
    ```typescript
    @controller('/examples', authMiddleware(<User>{ role: 'admin'}))
    ```
  - The function [authMiddleware](server/common/middleware/auth-middleware.ts) takes care of validating the JWT token passed in the header.
  - This can be extended to support role based access as well and the provision for that is added.
  - Note: as a demo sample public and private keys have been provided. Ideally these are maintained externally in a real world scenario JWKS (JSON Web Key Set) endpoints
- The following syntax must be used in the ‘Authorization’ header :
  Bearer xxxxxx.yyyyyyy.zzzzzz
- Testing using the [swagger ui]/(http://localhost:3000/swagger)
  - Click on the ‘Authorize’ button and set the Bearer token as mentioned above
  - Now all the /examples related APIs will work

##### RBAC Test

- If the JWT Security is enabled and we use the /login API to get the sample JWT Token but with role as "guest" instead of "admin"

```bash
curl -X POST "http://localhost:3000/api/v1/login" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"email\": \"test@gmail.com\", \"password\": \"pwd\", \"role\": \"guest\"}"
```

- On setting the Bearer token in the ‘Authorization’ header for subsequent calls to any of the /examples APIs will result in a role based authorization failure

![RBAC](screenshots/rbac1.PNG)

### GraphQL Directives

- This is work in progress.
- Currently added a sample for using the @date directive (as explained in the graphql-tools documentation)
- Query (`{ today(format: "mmm-dd-yy") }`) - Here the format is based on the `@date` scheme Directive , that takes the output of the resolver and formats the date before sending it out to the client
- Query ( `{ examplesWithAuth { id name } }` - This is a variation to the `examples` query mentioned in the section [JWT GraphQL APIs](#jwt-security-graphql). The difference here is that we use a `@auth` directive to handle the authentication based on the role instead of hardcoding the implementation in the resolver. This is a much cleaner and decoupled from the resolver.
- The query schema `examplesWithAuth: [ExampleType] @auth(requires: ADMIN)` uses the `@auth` directive which will intercept the call check for an authenticated user with appropriate role. (Note: You need to run the `login` mutation before and then set the HTTP Header with the Authorization token )

![schema directive](screenshots/schemaDirectives.png)

#### CSRF Security

- CSRF Security has been enabled in the **production** mode
- All POST APIs will require to read the cookie 'XSRF-TOKEN' set in the browser and then pass it in the response head with either of the following keys
  - req.headers['csrf-token'] - the CSRF-Token HTTP request header.
  - req.headers['xsrf-token'] - the XSRF-Token HTTP request header.
  - req.headers['x-csrf-token'] - the X-CSRF-Token HTTP request header.
  - req.headers['x-xsrf-token'] - the X-XSRF-Token HTTP request header.

#### Compression

- Compression is enabled by default on the server and is based on the [compression module](https://www.npmjs.com/package/compression)
- The configuration details are present in [the compression.ts file](server/common/config/compression.ts)
- In case there is a need to get responses without compression pass the key `x-no-compression` in the request header

#### Hystrix Circuit Breaker Support

- Circuit breaker support has been added to the project and uses the hystrix compliant module [brakes](https://github.com/awolden/brakes)
- Streaming support has been disabled by default for Hystrix.
- Enable it by setting the STREAM_HYSTRIX property to "STREAM_HYSTRIX=true" in the [.env](.env) file
- For convienence a docker version of the Hystrix server has been provided and setup in the [docker-compose.yml](docker-compose.yml) file

##### Steps to execute on Docker

```bash
npm run compile
docker-compose build
docker-compose up
```

### integrate with SonarQube (for continous code quality)

Assuming you have SonarQube 5.5.6 (LTS) installed

- Setup SonarQube with the [Sonar Typescript plugin](https://github.com/Pablissimo/SonarTsPlugin#installation) and the Generic Test Coverage plugin https://docs.sonarqube.org/display/PLUG/Generic+Test+Coverage
- Install sonar-scanner globally (`npm install --global sonar-scanner`)
- Update [`sonar-project.properties`](sonar-project.properties) file for the property `sonar.host.url` to point to your SonarQube server. By default this assumes that the SonarQube server is running locally using the default port
- Run the unit tests

```bash
npm run test
```

- The test results collected in the results folder in the sonar compatible format
- Push results to SonarQube

```bash
npm run sonar-scanner
```

- If working with SonarQube 6.x it supports [Generic Test Data](https://docs.sonarqube.org/display/SONAR/Generic+Test+Data)

Modify the [package.json](package.json) to set the appropriate version of the sonarQube

```json
jestSonar": {
    "reportPath": "reports",
    "reportFile": "test-reporter.xml",
    "indent": 4,
    "sonar56x": true
}
```

Note: for Sonar 6.x turn sonar56x to “false” and that will generate the test report that is using the sonar 6 schema.

### Load Testing

- [loadtest](https://www.npmjs.com/package/loadtest) is an excellent tool for loadtesting
- Steps to use it
- Install it as a global npm module

```bash
npm install -g loadtest
```

- Start the stellar microservice

```bash
npm run start
```

- Run the load test against the production build. Given below is one example

```bash
loadtest http://localhost:3000/api/v1/examples/1 -t 20 -c 20
```
