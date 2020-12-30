import { Observable } from 'rxjs';
import { Subscription } from '../models';

/**
 * Subscription Service Interface
 */
interface ISubscription {
    // Get metadata for subscription details
    metadata(): Promise<any>;
}

export default ISubscription;
