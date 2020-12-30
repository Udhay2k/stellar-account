import { Observable, AsyncSubject, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import * as _ from 'lodash';
import { Items } from '../models';
import { inject, injectable } from 'inversify';
import IItem from '../interfaces/iitem';
import SERVICE_IDENTIFIER from '../../common/constants/identifiers';
import ILogger from '../../common/interfaces/ilogger';


/**
 * Item Service Implementation
 */
@injectable()
class ItemService implements IItem {
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

export default ItemService;
