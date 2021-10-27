import { Pipe, PipeTransform } from '@angular/core';
import * as tinycolor from 'tinycolor2'

@Pipe({
  name: 'rolaColor'
})
export class RolaColorPipe implements PipeTransform {

  /**
   * 
   * @param value 
   * @param format 
   * @returns 
   */
  transform(value: string, format?: any): string {
    return tinycolor(value).toString(format);
  }

}
