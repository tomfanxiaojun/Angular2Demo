import {Component, OnInit} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS, URLSearchParams} from 'angular2/http';
import {Hero}              from './hero';
import {HeroService}       from './hero.service';
import {ArticleApi}       from './articleapi.service';
@Component({
  selector: 'hero-list',
  template: `
  <h3>Heroes:</h3>
  <ul>
    <li *ngFor="#hero of heroes">
      {{ hero.name }}
    </li>
  </ul>
  New Hero:
  <input #newHero />
  <button (click)="addHero(newHero.value); newHero.value=''">
    Add Hero
  </button>
  <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
  <h3>List:</h3>
  <ul>
                <li *ngFor="#article of articles"> {{article.headline.main}} </li>
             </ul>
  `,
  styles: ['.error {color:red;}'],
  providers: [HTTP_PROVIDERS, ArticleApi],
})
export class HeroListComponent implements OnInit {

  constructor(private _heroService: HeroService,private _articleApi: ArticleApi) { }

  ngOnInit() {
    this.getHeroes();
    this.seachArticle();

  }
  seachArticle(){
    this._articleApi.seachArticle('obama')
   .subscribe(
    articles =>this.articles=articles,
    error => this.errorMessage = <any>error);
  }
  getHeroes() {
    this._heroService.getHeroes()
      .subscribe(
      heroes => this.heroes = heroes,
      error => this.errorMessage = <any>error);
  }

  addHero(name: string) {
    if (!name) { return; }
    this._heroService.addHero(name)
      .subscribe(
      hero  => this.heroes.push(hero),
      error => this.errorMessage = <any>error);
  }
}

 