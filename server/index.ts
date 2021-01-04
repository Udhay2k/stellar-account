import './common/env';
import Server from './common/server';
import * as swaggerTools from 'oas-tools'
import { configHystrix } from './common/config';
import * as cluster from 'cluster';
import * as os from 'os';
import * as http from 'http';
import * as ProgressBar from 'progress';
import * as express from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as jsyaml from 'js-yaml';
import { swaggerify, verifyToken } from './common/config/';

// Single Node execution
// tslint:disable:no-console
const welcome = port =>
  console.log(
    `up and running in ${process.env.NODE_ENV ||
    'development'} @: ${os.hostname()} on port: ${port}`
  );

const options_object = {
  controllers: path.join(__dirname, './controllers'),
  checkControllers: false,
  loglevel: 'info',
  logfile: path.join(__dirname, './log/file'),
  strict: true,
  router: true,
  validator: true,
  oasSecurity: true,
  securityFile: {
    AccessToken: verifyToken
  },
  docs: {
    apiDocs: process.env.SWAGGER_API_DOCS_ROOT,
    apiDocsPrefix: '',
    swaggerUi: process.env.SWAGGER_API_DOCS,
    swaggerUiPrefix: ''
  },
  ignoreUnknownFormats: true
};

const setupServer = () => {
  // create server
  const bar = new ProgressBar('Server Startup [:bar] :percent :elapseds', {
    total: 4
  });
  bar.tick();
  const exApp = express();

  swaggerTools.configure(options_object)

  var yamlKeys = ["tags", "paths", "components"];
  var spec = fs.readFileSync(path.join(__dirname, "/common/swagger/swagger.yaml"), "utf8");

  try {
    yamlKeys.forEach(yKey => {
      let fPath = path.join(__dirname, "/common/swagger/" + yKey);

      if (fs.statSync(fPath).isDirectory()) {
        let yfiles = fs.readdirSync(fPath);
        spec += "\n" + yKey + ":";

        yfiles.forEach(yfile => {
          let fContent = fs.readFileSync(path.join(fPath, "/" + yfile), "utf8");
          spec += fContent.replace(yKey + ":", "");
        });
      }
    });
  } catch (e) {

  }

  bar.tick();

  var swaggerDoc = jsyaml.safeLoad(spec);

  swaggerTools.initializeMiddleware(swaggerDoc, exApp, (middleware) => {
    swaggerify(exApp, middleware)
    const app = new Server(exApp).getServer().build();
    bar.tick();
    // Create Server so that it can be reused for the
    // configuring the SubscriptionServer
    const ws = http.createServer(app);

    bar.tick();

    ws.listen(process.env.PORT, (err?: Error) => {
      if (err) {
        throw err;
      }

      if (process.env.STREAM_HYSTRIX === 'true') {
        // configure Hystrix Support
        configHystrix();
      }
      bar.tick();
      welcome(process.env.PORT);
    });
  }
  )
}

const setupCluster = () => {
  const numWorkers = require('os').cpus().length;

  console.log('Master cluster setting up ' + numWorkers + ' workers...');

  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }

  cluster.on('online', worker => {
    console.log('Worker ' + worker.process.pid + ' is online');
  });

  cluster.on('exit', (worker, code, signal) => {
    console.log(
      'Worker ' +
      worker.process.pid +
      ' died with code: ' +
      code +
      ', and signal: ' +
      signal
    );
    console.log('Starting a new worker');
    cluster.fork();
  });
};

// Run in cluster mode
if (process.env.CLUSTER_MODE === 'true' && cluster.isMaster) {
  setupCluster();
} else {
  setupServer();
}
