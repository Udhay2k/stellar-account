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
import { IInvoiceDetails } from '../../interfaces';
import { HttpError } from '../../models';
import { ErrorResponseBuilder, HttpStatus } from '../../services';

/**
 * Invoice details Controller
 */
@controller('/invdetails')
class InvoiceDetailsController implements interfaces.Controller {
  public invoiceDetailsService: IInvoiceDetails;
  public loggerService: ILogger;
  public metricsService: IMetrics;

  public constructor(
    @inject(SERVICE_IDENTIFIER.HYSTRIX) invoiceDetailsService: IInvoiceDetails,
    @inject(SERVICE_IDENTIFIER.LOGGER) loggerService: ILogger,
    @inject(SERVICE_IDENTIFIER.METRICS) metricsService: IMetrics
  ) {
    this.invoiceDetailsService = invoiceDetailsService;
    this.loggerService = loggerService;
    this.metricsService = metricsService;
  }

  /**
  * Get all metadata for invoice details
  * @param req request
  * @param res response
  */
  @httpGet('/metadata')
  public async metadata(@request() req: Request, @response() res: Response) {
    return this.invoiceDetailsService.metadata();
  }
}
export default InvoiceDetailsController;
