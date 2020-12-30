import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpGet,
  interfaces,
  request,
  response
} from 'inversify-express-utils';
import SERVICE_IDENTIFIER from '../../../common/constants/identifiers';
import { ILogger, IMetrics } from '../../../common/interfaces';
import { ISubscription } from '../../interfaces';
import { HttpError } from '../../models';
import { ErrorResponseBuilder, HttpStatus } from '../../services';

/**
 * Subscription API Controller
 */
@controller('/subscription')
class SubscriptionController implements interfaces.Controller {
  public supscriptionService: ISubscription;
  public loggerService: ILogger;
  public metricsService: IMetrics;

  public constructor(
    @inject(SERVICE_IDENTIFIER.SUBSCRIPTION) supscriptionService: ISubscription,
    @inject(SERVICE_IDENTIFIER.LOGGER) loggerService: ILogger,
    @inject(SERVICE_IDENTIFIER.METRICS) metricsService: IMetrics
  ) {
    this.supscriptionService = supscriptionService;
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
  return this.supscriptionService.metadata();
}
}
export default SubscriptionController;
