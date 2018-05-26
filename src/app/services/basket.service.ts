import { Injectable } from '@angular/core';
import {Basket} from '../models/basket';
import {Service} from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  saveBasket (basket: Basket) {
    localStorage.setItem('basket', JSON.stringify(basket));
  }

  readBasket () {
    return JSON.parse(localStorage.getItem('basket'));
  }

  addToBasket (service: Service[]) {
    let basket = this.readBasket();
    if (basket == null) {
      basket = new Basket();
      basket.items = service;
    } else {
      basket.items = basket.items.concat(service);
    }
    this.saveBasket(basket);
  }
}
