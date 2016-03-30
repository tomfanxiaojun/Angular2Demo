import {Pipe, Injectable} from "angular2/core";
@Injectable()
@Pipe({ name: "title" })
export class TitlePipe {
  //实现transform方法
  transform(input, args) {//input 参数代表输入数据，args参数代表输入参数
    return input.split(" ")
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }
}
