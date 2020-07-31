import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoCompleteFilter'
})
export class AutoCompleteFilterPipe implements PipeTransform {
  transform(list: any[], culture: string, query: string): any[] {
    if (list && query != null) {
      query = query.toLowerCase();
      if (query && query.length > 0) {
        return list.filter(
          listItem => query.split(' ').every(
            queryPart => listItem.name[culture].split(' ').some(listItemPart => listItemPart.toLowerCase().includes(queryPart))
          )
        );
      } else {
        return list;
      }
    }
    return [];
  }
}
