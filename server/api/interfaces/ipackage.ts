import { Observable } from 'rxjs';
import { Package } from '../models';
/**
 * Package Service Interface
 */
interface IPackage {
    // Get metadata for package details
    metadata(): Promise<any>;
}

export default IPackage;
