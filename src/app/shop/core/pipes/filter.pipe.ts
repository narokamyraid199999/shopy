import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: string, numberOfCut: number): string {
    let temp: string = value;
    temp = temp.split(' ').slice(0, numberOfCut).join(' ');
    return temp;
  }
}
