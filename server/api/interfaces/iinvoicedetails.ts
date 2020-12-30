import { Observable } from 'rxjs';
import { InvoiceDetails } from '../models';

/**
 * Invoice Service Interface
 */
interface IInvoiceDetails {
     // Get metadata for invoice details
    metadata(): Promise<any>;
}

export default IInvoiceDetails;
