import { Observable } from 'rxjs';

/**
 * Hystrix Service Interface
 */
interface IHystrixDemo {
  start(): Observable<boolean>;
  getPosts(timeOut: any): Observable<any>;
}

export default IHystrixDemo;
