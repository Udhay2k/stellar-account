import { Observable, from } from 'rxjs';
import { inject, injectable } from 'inversify';
import SERVICE_IDENTIFIER from '../../common/constants/identifiers';
import ILogger from '../../common/interfaces/ilogger';
import { ISubscription } from '../interfaces';

/**
 * Subscription Service Implementation
 */
@injectable()
class SubscriptionService implements ISubscription {
  public loggerService: ILogger;
  public constructor(
    @inject(SERVICE_IDENTIFIER.LOGGER) loggerService: ILogger
  ) {
    this.loggerService = loggerService;
  }

  public metadata(): Promise<any> {
    return Promise.resolve({});
  }
}

export default SubscriptionService;
