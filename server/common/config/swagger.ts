import * as swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';
import * as express from 'express';

/**
* Add Swagger Middleware and setup the UI route for swagger
 * @param app Express App
 */
export function swaggerify(exApp: express.Application, middleware) {
  // Add all the Swagger Express Middleware, or just the ones you need.
  // NOTE: Some of these accept optional options (omitted here for brevity)

  exApp.enable('case sensitive routing');
  exApp.enable('strict routing');

  //exApp.use(middleware.metadata());
  exApp.use(middleware.swaggerMetadata());
  exApp.use(middleware.swaggerValidator());
  exApp.use(middleware.swaggerUi());
};
