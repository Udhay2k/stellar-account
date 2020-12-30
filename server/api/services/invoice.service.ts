import * as Promise from 'bluebird';
import { Observable, from, of } from 'rxjs';
import { Invoice } from '../models';
import { inject, injectable } from 'inversify';

import SERVICE_IDENTIFIER from '../../common/constants/identifiers';
import ILogger from '../../common/interfaces/ilogger';
import IInvoice from '../interfaces/iinvoice';

const rp: any = require('request-promise');

let id = 0;
let date = new Date()

const examples: Invoice[] = [
  { id: id++, issue_date: date, total: 10, sub_total: 100, stellar_id: "238akdsfj932", stripe_payment_id: "str01", payment_date: date, discount: 0, subscription_details_id: "d33", notes: "" },
  { id: id++, issue_date: date, total: 10, sub_total: 100, stellar_id: "238akdsfj932", stripe_payment_id: "str01", payment_date: date, discount: 0, subscription_details_id: "d33", notes: "" }
];

/**
 * invoice Service Implementation
 */
@injectable()
class InvoiceService implements IInvoice {
  public logService: ILogger;

  public constructor(@inject(SERVICE_IDENTIFIER.LOGGER) logger: ILogger) {
    this.logService = logger;
  }

  public all(): Promise<Invoice[]> {
    return Promise.resolve(examples);
  }
  
  public metadata(): Promise<any> {
    return Promise.resolve({});
  }
}

export default InvoiceService;
