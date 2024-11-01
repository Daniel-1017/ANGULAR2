import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: string[] | number[], direction: 'asc' | 'dsc' = 'asc') {
    const sorted = [...value];
    sorted.sort((a, b) => {
      if (direction === 'asc') return a > b ? 1 : -1;
      return a > b ? -1 : 1;
    });
    return sorted;
  }
}

/* 
Angular will ri-execute the pipe only if the value changed.
If an array is ri-assigned a value, the pipe will execute again, if just a index changed inside, will not run again
Use "pure": false to make it execute again, this can be dangerous because this pipe will run allot of times now.
*/
