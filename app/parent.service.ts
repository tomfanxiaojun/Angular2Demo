
import {Injectable}     from 'angular2/core';
import {Observable}     from 'rxjs/Observable';
@Injectable()
export class ParentService {
  constructor() { }
   handleError(error: Response) {  
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }


}

