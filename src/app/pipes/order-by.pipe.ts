import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], ...args: any[]): any[] {
    let sortOrder = args[0];
    let sortKey = args[1];
    if (typeof array[0] == 'number' || array[0] == 'Number')
      return this.numberSort(array, args);
    else if (typeof array[0] == 'string' || array[0] == 'String')
      return this.stringSort(array, args);
    else if (array[0] instanceof Date) return this.dateSort(array);
    else if (typeof array[0] == 'object')
      return this.objectSort(array, sortOrder, sortKey);
    else return array.sort();
  }

  numberSort(array: any[], args: string[]): number[] {
    if (args[0] == 'desc') {
      return array.sort((n1, n2) => n2 - n1);
    } else {
      return array.sort((n1, n2) => n1 - n2);
    }
  }
  stringSort(array: any[], args: string[]): string[] {
    if (args[0] == 'desc') {
      return array.sort().reverse();
    } else {
      return array.sort();
    }
  }
  objectSort(array: any[], sortOrder: string, keyss: string) {
    let data = array.sort((n1, n2) => {
      const value1 = n1[keyss];
      const value2 = n2[keyss];
      if (typeof value1 === 'string' && typeof value2 === 'string') {
        return value1.localeCompare(value2);
      } else {
        return value1 - value2;
      }
    });
    if (sortOrder === 'desc') {
      return data.reverse();
    } else {
      return data;
    }
  }

  dateSort(array: Date[]) {
    return array.sort((d1, d2) => {
      if (d1 > d2) return 1;
      else if (d1 < d2) return -1;
      else return 0;
    });
  }
}
