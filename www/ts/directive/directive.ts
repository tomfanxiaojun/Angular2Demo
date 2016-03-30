import {Directive,Injectable, ElementRef, Inject} from "angular2/core";
@Injectable()
@Directive({
	selector:"[down-up]",
    inputs: ["fontColor:down-up"]
})
export class DownUp {
	constructor( @Inject(ElementRef) er) {
		this.er = er;
	}
	set fontColor(c){
	 	 var el = this.er.nativeElement;
	 	 if(c>0){
          el.style.color= "red";   
		   } else if (c == 0) {
           el.style.color= "green";   
		   } else {
           el.style.color= "gary";   
		   }

	}
	}