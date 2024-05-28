import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value:any,searchFilter:any): any {
    return value.filter((e:any)=>{
      return e.fb_campaign_id.toLowerCase().indexOf(searchFilter) > 1;
    // return console.log(value)

    })
  }

}
