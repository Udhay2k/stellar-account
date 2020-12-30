import { Request, Response } from 'express';
import { inject } from 'inversify';
import { BaseHttpController, controller, httpGet, httpPost, request, requestParam, response } from 'inversify-express-utils';
import { timeout } from 'rxjs/operators';
import SERVICE_IDENTIFIER from '../../../common/constants/identifiers';
import { ILogger, IMetrics } from '../../../common/interfaces';
import { authMiddleware } from '../../../common/middleware/auth-middleware';
import { IInvoice } from '../../interfaces';
import { HttpError, Invoice } from '../../models';
import { ErrorResponseBuilder, HttpStatus } from '../../services';

/**
 * Examples Controller
 * JWT Auth middleware as well as logging middleware added
 */
@controller('/invoice')
class InvoiceController extends BaseHttpController {
  public invoiceService: IInvoice;
  public loggerService: ILogger;
  public metricsService: IMetrics;

  public constructor(
    @inject(SERVICE_IDENTIFIER.INVOICE) invoiceService: IInvoice,
    @inject(SERVICE_IDENTIFIER.LOGGER) loggerService: ILogger,
    @inject(SERVICE_IDENTIFIER.METRICS) metricsService: IMetrics
  ) {
    super();
    this.invoiceService = invoiceService;
    this.loggerService = loggerService;
    this.metricsService = metricsService;
  }

  /**
   * Get all metadata for invoice
   * @param req request
   * @param res response
   */
  @httpGet('/metadata')
  public async metadata(@request() req: Request, @response() res: Response) {
    return this.invoiceService.metadata();
  }
}
export default InvoiceController;
