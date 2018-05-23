import { Component, OnInit } from '@angular/core';
import {Basket} from '../models/basket';
import {BasketItem} from '../models/basket-item';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor() { }
  basket: Basket;
  number: number;
  ngOnInit() {
    this.basket = this.readBasket();
  }
  initBasket() {
    const basket = new Basket();
    this.number = 0;
    const basketItem1 = new BasketItem();
    basketItem1.id = 1;
    basketItem1.price = '200.00р';
    basketItem1.data = 'Сверление профиля обычным сверлом';
    basketItem1.name = 'Сверление профиля';
    const basketItem2 = new BasketItem();
    basketItem2.id = 2;
    basketItem2.price = '200.00р';
    basketItem2.data = 'Сверление профиля ступенчатым сверлом';
    basketItem2.name = 'Сверление профиля ступенчатое';
    const basketItem3 = new BasketItem();
    basketItem3.id = 3;
    basketItem3.price = '200.00р';
    basketItem3.data = 'Сверление профиля обычным сверлом';
    basketItem3.name = 'Сверление профиля';
    basket.items = [basketItem1, basketItem2, basketItem3];
    this.saveBasket(basket);
    this.basket = basket;
  }
  itemNumber() {
    this.number = this.number + 1;
    return this.number;
  }

  delItem(id: number) {
    this.basket.items = this.basket.items.filter(item => item.id !== id);
    this.number = 0;
    this.saveBasket(this.basket);
  }

  orderSend() {
    alert('Заказ принят в обработку!');
  }

  saveBasket (basket: Basket) {
    localStorage.setItem('basket', JSON.stringify(basket));
  }

  readBasket () {
    return JSON.parse(localStorage.getItem('basket'));
  }

}
