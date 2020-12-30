import Ipackage from '../interfaces/ipackagedetails';
import SERVICE_IDENTIFIER from '../../common/constants/identifiers';
import IDGenerator from '../../common/config/utils';
import ILogger from '../../common/interfaces/ilogger';
import { Observable, from } from 'rxjs';
import { inject, injectable } from 'inversify';

/**
 * User Service for User Identity and Authentication
 * Placeholder implementation
 */
@injectable()
class PackageService implements Ipackage {
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

export default PackageService;
