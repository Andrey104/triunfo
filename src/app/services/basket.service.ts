import { Injectable } from '@angular/core';
import {Basket} from '../models/basket';
import {Service} from "../models/service";

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
    const basket = this.readBasket();
    if (basket.items == null) {
      basket.items = service;
    } else {
      basket.items = basket.items.concat(service);
    }
    this.saveBasket(basket);
  }
}
