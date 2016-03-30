import {bootstrap}         from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from "angular2/router";

// Add all operators to Observable
import 'rxjs/Rx';

import {WikiComponent}        from './component/wiki/wiki.component';
import {WikiSmartComponent} from './component/wiki/wiki-smart.component';
import {TohComponent}         from './component/toh/toh.component';
import {RouterApp}         from './component/router/router.component';

bootstrap(WikiComponent);
bootstrap(WikiSmartComponent);
bootstrap(TohComponent);
bootstrap(RouterApp,[ROUTER_PROVIDERS]);
