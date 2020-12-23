import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'done'
})
export class DonePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
