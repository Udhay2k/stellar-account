import { Observable, from } from 'rxjs';
import { inject, injectable } from 'inversify';
import SERVICE_IDENTIFIER from '../../common/constants/identifiers';
import ILogger from '../../common/interfaces/ilogger';
import { IPackageDetails } from '../interfaces';

/**
 * Starwars Service Implementation
 */
@injectable()
class PackageDetailsService implements IPackageDetails {
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

export default PackageDetailsService;
