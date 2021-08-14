import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'products'
})
export class ProductsPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {

  //   console.log('**value',value)
  //   return null;
  // }

  transform(value: any,criteria: string) {

    let temp: any = [];

    console.log(value[0].name)

    for(var i=0; i < value.length ; i++){
      if(value[i].name == criteria)
      {
        temp.push(value[i]);
      }
    }

    return temp;
  }

}
