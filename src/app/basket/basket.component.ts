import { Component, OnInit } from '@angular/core';
import {Basket} from '../models/basket';
import {Service} from '../models/service';
import {BasketService} from '../services/basket.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../services/service.service';
import {Order} from '../models/order';
import {Router} from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private basketService: BasketService,
              private service: ServiceService,
              private router: Router) { }
  basket: Basket;
  number: number;

  order: FormGroup = new FormGroup({
    time: new FormControl('', Validators.required),
    wishes: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.basket = this.basketService.readBasket();
  }

  delItem(id: number) {
    this.basket.items = this.basket.items.filter(item => item.id !== id);
    this.number = 0;
    this.basketService.saveBasket(this.basket);
  }

  orderSend() {
    const order = new Order<number>();
    order.time = this.order.value.time;
    order.wishes = this.order.value.wishes;
    order.services = this.basket.items.map(this.servicesMinMap);
    this.service.addOrder(order).subscribe(data => {
      alert('Заказ добавлен!');
      this.basketService.clearBasket();
      this.router.navigate(['/']);
    }, error2 => {
      alert('Ошибка! Попробуйте снова!');
    });
  }

  servicesMinMap(service: any) {
    service = service.id;
    return service;
  }



}
