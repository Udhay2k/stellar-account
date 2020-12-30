import { Observable } from 'rxjs';
import { Items } from '../models';

/**
 * Item Service Interface
 */
interface IItem {
  // Get metadata for item details
  metadata(): Promise<any>;
}

export default IItem;
