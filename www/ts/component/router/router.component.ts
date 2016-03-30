import {Inject, Component} from 'angular2/core';
import {RouteConfig, RouteParams, LocationStrategy, ROUTER_DIRECTIVES} from 'angular2/router';

//EzAlbum组件
@Component({
  selector: "ez-album",
  template: `<h3>{{title}}</h3>`
})
class EzAlbum {
  constructor( @Inject(RouteParams) params) {
    this.title = params.get("title");
  }
}
//EzAlbum组件
@Component({
  selector: "ez-music",
  template: `<h3>{{title}}</h3>`
})
class Music {
  constructor( @Inject(RouteParams) params) {
    this.title = params.get("title");
  }
}
//EzApp组件
@Component({
  selector: "router-app",
  directives: [ROUTER_DIRECTIVES],
  template: `
		<nav>
		  <span>Albums: </span>
		  <a [routerLink]="['Album',{title:'We Are the Champion'}]">Album 1#</a>
		  <a [routerLink]="['Album',{title:'Let It Be'}]">Album 2#</a>
      <a [routerLink]="['Music',{title:'This is a song'}]">Music#</a>
		</nav>
		<main>

			<!--声明路由出口-->
			<router-outlet></router-outlet>
		</main>
	`
})
@RouteConfig([
  { path: "/music/album/:title", component: EzAlbum, name: "Album" },
  { path: "/music/music/:title", component: Music, name: "Music" },
])
export class RouterApp {
  constructor( @Inject(LocationStrategy) ls) {
    ls.pushState = function() { };
  }

}
