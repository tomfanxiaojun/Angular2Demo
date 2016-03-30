import {Component, OnInit, Pipe} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS, URLSearchParams} from 'angular2/http';
import {Goods}              from '../model/goods';
import {TitlePipe}              from '../../pipe/pipe';
import {GoodsService}       from '../../service/toh/goods.service';
import {ArticleApi}       from '../../service/toh/articleapi.service';
@Component({
  selector: 'goods-list',
  templateUrl: `../../www/template/Goods/GoodsList.html`,
  styles: ['.error {color:red;}'],
  providers: [HTTP_PROVIDERS, ArticleApi],
  pipes: [TitlePipe]
})
export class GoodsListComponent implements OnInit {

  constructor(private _goodsService: GoodsService ,private _articleApi: ArticleApi) { }

  ngOnInit() {
    this.getGoods();
    this.seachArticle();

  }
  seachArticle(){
    this._articleApi.seachArticle('obama')
   .subscribe(
    articles =>this.articles=articles,
    error => this.errorMessage = <any>error);
  }
  getGoods() {
    this._goodsService.getGoods()
      .subscribe(
     goods => this.goods = goods,
      error => this.errorMessage = <any>error);
  }

  addGoods(name: string) {
    if (!name) { return; }
    this._goodsService.addGoods(name)
      .subscribe(
    goods => this.goods.push(goods),
      error => this.errorMessage = <any>error);
  }
}

 