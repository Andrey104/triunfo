import { Component, OnInit } from '@angular/core';
import {Basket} from '../models/basket';
import {Service} from '../models/service';
import {BasketService} from '../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private basketService: BasketService) { }
  basket: Basket;
  number: number;
  ngOnInit() {
    this.basket = this.basketService.readBasket();
  }

  initBasket() {
    const basket = new Basket();
    const basketItem1 = new Service();
    basketItem1.id = 1;
    basketItem1.price = 200.00;
    basketItem1.description = 'Сверление профиля обычным сверлом';
    basketItem1.name = 'Сверление профиля';
    const basketItem2 = new Service();
    basketItem2.id = 2;
    basketItem2.price = 200;
    basketItem2.description = 'Сверление профиля ступенчатым сверлом';
    basketItem2.name = 'Сверление профиля ступенчатое';
    const basketItem3 = new Service();
    basketItem3.id = 3;
    basketItem3.price = 200;
    basketItem3.description = 'Сверление профиля обычным сверлом';
    basketItem3.name = 'Сверление профиля';
    basket.items = [basketItem1, basketItem2, basketItem3];
    this.basketService.saveBasket(basket);
    this.basket = basket;
  }

  addToBasket() {
    const basketItem1 = new Service();
    basketItem1.id = 1;
    basketItem1.price = 200.00;
    basketItem1.description = 'Сверление профиля обычным сверлом';
    basketItem1.name = 'Сверление профиля';
    const basketItem2 = new Service();
    basketItem2.id = 2;
    basketItem2.price = 200;
    basketItem2.description = 'Сверление профиля ступенчатым сверлом';
    basketItem2.name = 'Сверление профиля ступенчатое';
    const basketItem3 = new Service();
    basketItem3.id = 3;
    basketItem3.price = 200;
    basketItem3.description = 'Сверление профиля обычным сверлом';
    basketItem3.name = 'Сверление профиля';
    this.basketService.addToBasket([basketItem1, basketItem2, basketItem3]);
    this.basket = this.basketService.readBasket();
  }

  delItem(id: number) {
    this.basket.items = this.basket.items.filter(item => item.id !== id);
    this.number = 0;
    this.basketService.saveBasket(this.basket);
  }

  orderSend() {
    alert('Заказ принят в обработку!');
  }



}
