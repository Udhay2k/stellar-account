import { Observable } from 'rxjs';
import { PackageDetails } from '../models';
/**
 * Package Details Service Interface
 */
interface IPackageDetails {
  // Get metadata for package details
  metadata(): Promise<any>;
}

export default IPackageDetails;
