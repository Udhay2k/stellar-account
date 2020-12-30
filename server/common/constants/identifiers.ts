const SERVICE_IDENTIFIER = {
  LOGGER: Symbol.for('Logger'),
  METRICS: Symbol.for('Metrics'),
  INVOICE: Symbol.for('Invoice'),
  ITEM: Symbol.for('Item'),
  ITEMDETAILS: Symbol.for('ItemDetails'),
  SUBSCRIPTION: Symbol.for('Subscription'),
  PACKAGE: Symbol.for('Package'),
  PACKAGEDETAILS: Symbol.for('PackageDetails'),
  INVOICEDETAILS: Symbol.for('InvoiceDetails'),
  LOGGER_MIDDLEWARE: Symbol.for('LoggerMiddleware')
};

export default SERVICE_IDENTIFIER;
