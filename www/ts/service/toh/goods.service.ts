
import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Jsonp, URLSearchParams} from 'angular2/http';
import {Goods}           from '.../model/goods';
import {Observable}     from 'rxjs/Observable';
import {ParentService}  from '../baseService/parent.service';
@Injectable()
export class GoodsService extends ParentService {
  constructor(private http: Http) { }
  private _goodsUrl = 'app/goods';  // URL to web api
  getGoods() {
    return this.http.get(this._goodsUrl)
      .map(res => <Goods[]> res.json().data)
      .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError);
  }

  addGoods(name: string): Observable<Goods> {

    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._goodsUrl, body, options)
      .map(res => <Goods> res.json().data)
      .catch(this.handleError)
  }

}
