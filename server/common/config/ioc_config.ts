import 'reflect-metadata';
import { Container } from 'inversify';

import { LogService, MetricsService, SecurityService } from '../services';
import {
  IInvoice,
  IInvoiceDetails,
  IItem,
  IPackage,
  IPackageDetails,
  ISubscription
} from '../../api/interfaces';
import { ILogger, IMetrics, ISecurity } from '../interfaces';
import {
  InvoiceDetailsService,
  InvoiceService,
  ItemService,
  PackageDetailsService,
  PackageService,
  SubscriptionService
} from '../../api/services';
import LoggerMiddleware from '../middleware/logger-middleware';
import '../../api/controllers/invoicedetails/controller';
import '../../api/controllers/invoice/controller';
import '../../api/controllers/items/controller';
import '../../api/controllers/packagedetails/controller';
import SERVICE_IDENTIFIER from '../constants/identifiers';

/**
 * IOC Container - Singleton IOC container class
 * Initialized the IOC container and sets up all the container bindings
 */
export class IOCContainer {
  public static getInstance() {
    if (!IOCContainer.instance) {
      IOCContainer.instance = new IOCContainer();
      // Initialize the container
      const container = new Container();

      // Define service bindings
      container.bind<IItem>(SERVICE_IDENTIFIER.ITEM).to(ItemService);
      container
        .bind<IInvoiceDetails>(SERVICE_IDENTIFIER.INVOICE)
        .to(InvoiceDetailsService);
      container.bind<IInvoice>(SERVICE_IDENTIFIER.INVOICEDETAILS).to(InvoiceService);
      container
        .bind<IPackage>(SERVICE_IDENTIFIER.PACKAGE)
        .to(PackageService);
      container.bind<IPackageDetails>(SERVICE_IDENTIFIER.PACKAGEDETAILS).to(PackageDetailsService);
      container.bind<ISubscription>(SERVICE_IDENTIFIER.SUBSCRIPTION).to(SubscriptionService);
      container
        .bind<ILogger>(SERVICE_IDENTIFIER.LOGGER)
        .to(LogService)
        .inSingletonScope();
      container
        .bind<IMetrics>(SERVICE_IDENTIFIER.METRICS)
        .to(MetricsService)
        .inSingletonScope();
      container
        .bind<LoggerMiddleware>(SERVICE_IDENTIFIER.LOGGER_MIDDLEWARE)
        .to(LoggerMiddleware);
      IOCContainer.instance.container = container;
    }
    return IOCContainer.instance;
  }

  private static instance: IOCContainer;
  private container: Container;
  private constructor() {}

  public getContainer(): Container {
    return this.container;
  }

  public setContainer(container: Container) {
    this.container = container;
  }
}
