import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'helperResultTypePipe'
})
export class HelperResultElementTypePipe implements PipeTransform {
  transform(type: number): string {
    let statusStr: string;
    switch (type) {
      case 0: {
        statusStr = 'Ведущий';
        break;
      }
      case 1: {
        statusStr = 'Фотограф';
        break;
      }
      case 2: {
        statusStr = 'Место';
        break;
      }
      case 3: {
        statusStr = 'Оформление';
        break;
      }
    }
    return statusStr;
  }
}
