import { Request, Response } from 'express';
import { inject } from 'inversify';
import { BaseHttpController, controller, httpGet, httpPost, request, requestParam, response } from 'inversify-express-utils';
import { timeout } from 'rxjs/operators';
import SERVICE_IDENTIFIER from '../../../common/constants/identifiers';
import { ILogger, IMetrics } from '../../../common/interfaces';
import { authMiddleware } from '../../../common/middleware/auth-middleware';
import { IPackage } from '../../interfaces';
import { HttpError, Items } from '../../models';
import { ErrorResponseBuilder, HttpStatus } from '../../services';

/**
 * Package API Controller
 * 
 */
@controller('/package')
class PackageController extends BaseHttpController {
  public packageService: IPackage;
  public loggerService: ILogger;
  public metricsService: IMetrics;

  public constructor(
    @inject(SERVICE_IDENTIFIER.PACKAGE) packageService: IPackage,
    @inject(SERVICE_IDENTIFIER.LOGGER) loggerService: ILogger,
    @inject(SERVICE_IDENTIFIER.METRICS) metricsService: IMetrics
  ) {
    super();
    this.packageService = packageService;
    this.loggerService = loggerService;
    this.metricsService = metricsService;
  }

  /**
* Get all metadata for Package
* @param req request
* @param res response
*/
  @httpGet('/metadata')
  public async metadata(@request() req: Request, @response() res: Response) {
    return this.packageService.metadata();
  }
}

export default PackageController;
