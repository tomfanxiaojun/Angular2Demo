import {Directive,Injectable, ElementRef, Inject} from "angular2/core";
@Injectable()
@Directive({
	selector:"[down-up]",
    inputs: ["fontColor:down-up"],//通过使用Directive注解的inputs属性，我们可以将DOM对象的属性映射到指令 对象的属性
host : {
	"(click)"  : "onClick($event)"
    }
})
export class DownUp {
	constructor( @Inject(ElementRef) er) {
		this.er = er.nativeElement;
        this.er.style.cursor = "pointer";
		this.flag = true;
	}
	set fontColor(c) {//我们可以使用ES6中的setter，在DownUp中捕捉每个变化的时刻：
		var el = this.er;
	 	 if(c>0){
          el.style.color= "red";   
		   } else if (c == 0) {
			  el.style. color= "gray";   
		   } else {
			   el.style. color= "green";   
		   }

	}
	onClick($event){
        this.flag = !this.flag;
		alert(`The Flag is ${this.flag}`)
		 
		
	}
	}