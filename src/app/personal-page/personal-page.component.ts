import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {Service} from "../models/service";
import {Order} from "../models/order";
import {AuthService} from "../services/auth.service";
import {ServiceService} from "../services/service.service";
import {log} from "util";

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

  constructor(private auth: AuthService,
              private service: ServiceService) { }
  user: User;
  orders: Order<Service>[];
  ngOnInit() {
    this.loadServices();
    this.user = this.auth.getAuthUser();
  }

  loadServices(): void {
    this.service.getOrders()
      .subscribe(orders => {
        this.orders = orders;
      }, error2 => {
        log(error2);
      });
  }

}
