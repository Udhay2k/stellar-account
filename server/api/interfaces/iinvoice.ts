import * as Promise from 'bluebird';
import { Observable } from 'rxjs';
import { Invoice } from '../models';

/**
 * Invoice Service Interface
 */
interface IInvoice {
  // Get metadata for invoice
  metadata(): Promise<any>;

  // Get metadata for invoice
  all(): Promise<Invoice[]>;
}

export default IInvoice;
