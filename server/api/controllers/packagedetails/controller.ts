import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpGet,
  interfaces,
  request,
  requestParam,
  response
} from 'inversify-express-utils';
import { timeout } from 'rxjs/operators';
import SERVICE_IDENTIFIER from '../../../common/constants/identifiers';
import { ILogger, IMetrics } from '../../../common/interfaces';
import { IPackageDetails } from '../../interfaces';
import { APIResponse, HttpError } from '../../models';
import { ErrorResponseBuilder, HttpStatus } from '../../services';

/**
 * Controller for Package Details APIs
 */
@controller('/pkgdetail')
class PackageDetailsController implements interfaces.Controller {
  public packageDetailsService: IPackageDetails;
  public loggerService: ILogger;
  public metricsService: IMetrics;

  public constructor(
    @inject(SERVICE_IDENTIFIER.PACKAGEDETAILS) packageDetailsService: IPackageDetails,
    @inject(SERVICE_IDENTIFIER.LOGGER) loggerService: ILogger,
    @inject(SERVICE_IDENTIFIER.METRICS) metricsService: IMetrics
  ) {
    this.packageDetailsService = packageDetailsService;
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
  return this.packageDetailsService.metadata();
}
}
export default PackageDetailsController;
