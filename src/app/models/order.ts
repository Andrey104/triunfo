import {Service} from './service';

export class Order<T> {
  time: string;
  id: number;
  wishes: string;
  services: T[];
}
