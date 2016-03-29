
import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Jsonp, URLSearchParams} from 'angular2/http';
import {Hero}           from '.../model/hero';
import {Observable}     from 'rxjs/Observable';
import {ParentService}  from '../baseService/parent.service';



@Injectable()
export class ArticleApi extends ParentService {
  constructor(private http: Http) {}

  private const API_KEY = '6c759d320ea37acf99ec363f678f73c0:14:74192489';
  seachArticle(query) {
    const endpoint = 'http://api.nytimes.com/svc/search/v2/articlesearch.json';
    const searchParams = new URLSearchParams()
    searchParams.set('api-key', this.API_KEY);
    searchParams.set('q', query); 
      return this.http.get(endpoint, {search: searchParams})
        .map(res => res.json().response.docs)
        .do(data => console.log(data)) // eyeball results in the console
        .catch(this.handleError);
  }
  postExample(someData) {
    const endpoint = 'https://your-endpoint';
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http
      .post(endpoint, JSON.stringify(someData), { headers: headers })
      .map(res => res.json());
  }

}
 