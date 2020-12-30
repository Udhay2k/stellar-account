import * as Promise from 'bluebird';
import { Observable, from, of } from 'rxjs';
import { InvoiceDetails } from '../models';
import { inject, injectable } from 'inversify';

import SERVICE_IDENTIFIER from '../../common/constants/identifiers';
import ILogger from '../../common/interfaces/ilogger';
import IInvoicedetails from '../interfaces/iinvoicedetails';

const rp: any = require('request-promise');

/**
 * Examples Service Implementation
 */
@injectable()
class InvoiceDetailsService implements IInvoicedetails{
  public logService: ILogger;

  public constructor(@inject(SERVICE_IDENTIFIER.LOGGER) logger: ILogger) {
    this.logService = logger;
  }

  public metadata(): Promise<any> {
    return Promise.resolve({});
  }
}

export default InvoiceDetailsService;
