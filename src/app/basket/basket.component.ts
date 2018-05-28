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

  delItem(id: number) {
    this.basket.items = this.basket.items.filter(item => item.id !== id);
    this.number = 0;
    this.basketService.saveBasket(this.basket);
  }

  orderSend() {
    alert('Заказ принят в обработку!');
  }



}
