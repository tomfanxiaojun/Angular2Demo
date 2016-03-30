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
  template: `<h3>{{title}}</h3>
<h3>{{id}}</h3>
  `

})
class Music {
  constructor( @Inject(RouteParams) params) {
    this.title = params.get("title");
    this.id = params.get("id");
  }
}
//EzApp组件
@Component({
  selector: "router-app",
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>Router</h1>
		<nav>
		  <span>Albums: </span>
		  <a [routerLink]="['Album',{title:'We Are the Champion'}]">Album 1#</a>
		  <a [routerLink]="['Album',{title:'Let It Be'}]">Album 2#</a>
      <a [routerLink]="['Music',{title:'This is a song',id:1}]">Music#</a>
		</nav>
		<main>
			<!--声明路由出口-->
			<router-outlet></router-outlet>
		</main>
	`
})
@RouteConfig([//由于Angular2是面向组件的，所以，Angular2的路由其实就是组件之间的路由。
  { path: "/album/:title", component: EzAlbum, name: "Album" },
  { path: "/music/:title/:id", component: Music, name: "Music" },
])
export class RouterApp {
  constructor( @Inject(LocationStrategy) ls) {
    ls.pushState = function() { };
  }

}
