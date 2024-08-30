import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceText',
})
export class SpaceTextPipe implements PipeTransform {
  transform(value: string | any): string {
    return value.split('').join(' ');
  }
}
