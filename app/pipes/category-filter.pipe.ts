import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "categoryFilter"
})

export class CategoryFilterPipe implements PipeTransform {
  transform(clothes: Array<any>, condition: {[cat: string]: any}): Array<any>{
    if(!clothes) {
      return null;
    }
    return clothes.filter(cloth=>{
      for(let cat in condition){
        if(cloth[cat] == condition[cat] || condition[cat] == ''){
          return true;
        } else if(cloth[cat] !== condition[cat]){
          return false;
        }
      }
      return true;
    })
  }
}
