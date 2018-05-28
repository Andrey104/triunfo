import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ServiceService} from '../services/service.service';
import {log} from 'util';
import {Order} from '../models/order';
import {Service} from '../models/service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private auth: AuthService,
              private service: ServiceService,
              private activatedRoute: ActivatedRoute) { }
  order: Order<Service>;
  id: number;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.loadOrders();
    });
  }
  loadOrders(): void {
    this.service.getOrder(this.id)
      .subscribe(order => {
        this.order = order;
      }, error2 => {
        log(error2);
      });
  }
  serviceSum() {
    let sum = 0;
    this.order.services.forEach(item => {
      sum = sum + Number(item.price);
    });
    return sum.toFixed(2);
  }
}
