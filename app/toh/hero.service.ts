
import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Jsonp, URLSearchParams} from 'angular2/http';
import {Hero}           from './hero';
import {Observable}     from 'rxjs/Observable';
import {ParentService}  from '../parent.service';
@Injectable()
export class HeroService extends ParentService{
  constructor(private http: Http) { }  
  private _heroesUrl = 'app/heroes';  // URL to web api
  getHeroes() {   
    return this.http.get(this._heroesUrl)
      .map(res => <Hero[]> res.json().data)
      .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError);
  }

  addHero(name: string): Observable<Hero> {

    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._heroesUrl, body, options)
      .map(res => <Hero> res.json().data)
      .catch(this.handleError)
  }

}
