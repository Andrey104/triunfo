import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  minutesStringFormat(minutes: number) {
    let strMinutes: string;
    if (minutes < 10) {
      strMinutes = '0' + minutes.toString();
    } else {
      strMinutes = minutes.toString();
    }
    return strMinutes;
  }

  hoursStringFormat(hour: number) {
    let strHour: string;
    if (hour < 10) {
      strHour = '0' + hour.toString();
    } else {
      strHour = hour.toString();
    }
    return strHour;
  }

  monthStringFormat(numberMonth: number) {
    const months = ['янв', 'фев', 'мрт', 'апр', 'мая', 'июн',
      'июл', 'авг', 'сен', 'окт', 'нбр', 'дек'];
    return months[numberMonth];
  }
}
