import {Component}         from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';


import {GoodsListComponent} from './goods-list.component';
import {GoodsService}       from '../../service/toh/goods.service';

import {provide}           from 'angular2/core';
import {XHRBackend}        from 'angular2/http';

// in-memory web api imports
import {InMemoryBackendService,
SEED_DATA}         from 'a2-in-memory-web-api/core';
import {GoodData}          from '../../goods-data';

@Component({
  selector: 'my-toh',
  template: `
  <h1>Goods</h1>
  <goods-list></goods-list>
  `,
  directives: [GoodsListComponent],
  providers: [
    HTTP_PROVIDERS,
    GoodsService,
    // in-memory web api providers
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA, { useClass: GoodData }) // in-mem server data
  ]
})
export class TohComponent { }
