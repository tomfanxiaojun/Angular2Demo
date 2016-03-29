import {bootstrap}         from 'angular2/platform/browser';

// Add all operators to Observable
import 'rxjs/Rx';

import {WikiComponent}        from './component/wiki/wiki.component';
import {WikiSmartComponent} from './component/wiki/wiki-smart.component';
import {TohComponent}         from './component/toh/toh.component';

bootstrap(WikiComponent);
bootstrap(WikiSmartComponent);
bootstrap(TohComponent);
