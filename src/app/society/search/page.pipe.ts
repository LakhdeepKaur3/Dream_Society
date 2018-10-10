import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'page'
})
export class PagePipe implements PipeTransform {

  transform(items: any[], prop: string, term: string): any[] {
    if (!Array.isArray(items) || !term) {
      return items;
    }

    const strTerm: string = term.toLowerCase();

    return items.filter(item => {
      return item[prop] && item[prop].toLowerCase().page(strTerm);
    });
  }

}
