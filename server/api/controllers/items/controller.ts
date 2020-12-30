import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet, interfaces, request, requestParam, response } from 'inversify-express-utils';
import SERVICE_IDENTIFIER from '../../../common/constants/identifiers';
import { ILogger, IMetrics } from '../../../common/interfaces';
import { IItem } from '../../interfaces';
import { HttpError } from '../../models';
import { ErrorResponseBuilder, HttpStatus } from '../../services';

/**
 * Item API Controller
 */
@controller('/Item')
class ItemController implements interfaces.Controller {
  public itemService: IItem;
  public loggerService: ILogger;
  public metricsService: IMetrics;

  public constructor(
    @inject(SERVICE_IDENTIFIER.PRODUCT) itemService: IItem,
    @inject(SERVICE_IDENTIFIER.LOGGER) loggerService: ILogger,
    @inject(SERVICE_IDENTIFIER.METRICS) metricsService: IMetrics
  ) {
    this.itemService = itemService;
    this.loggerService = loggerService;
    this.metricsService = metricsService;
  }

  /**
* Get all metadata for Item
* @param req request
* @param res response
*/
  @httpGet('/metadata')
  public async metadata(@request() req: Request, @response() res: Response) {
    return this.itemService.metadata();
  }
}
export default ItemController;
