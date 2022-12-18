import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodificasesso'
})
export class DecodificasessoPipe implements PipeTransform {

  transform(sesso: string, ...args: string[]): string {
    return sesso ===  "MASCHIO"? 'M' : 'F';
  }

}
