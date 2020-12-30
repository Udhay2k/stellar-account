/**
 * Invoice Data Model
 */
export interface Invoice {
  id: number;
  issue_date: Date;
  total: number;
  sub_total: number;
  discount: number;
  stripe_payment_id: string;
  payment_date: Date;
  subscription_details_id: string;
  stellar_id: string;
  notes: string;
}

/**
 * Invoice Details Data Model
 */
export interface InvoiceDetails {
  id: number;
  item_id: string;
  quantity: number;
  unit_price: number;
  total: number;
  invoice_id: string;
  start_date: Date;
  expiry_date: Date;
}
