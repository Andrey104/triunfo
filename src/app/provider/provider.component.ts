import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {ServiceService} from "../services/service.service";
import {log} from "util";
import {ActivatedRoute} from "@angular/router";
import {User} from "../models/user";
import {Service} from "../models/service";
import {BasketService} from "../services/basket.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  constructor(private auth: AuthService,
              private service: ServiceService,
              private activatedRoute: ActivatedRoute,
              private basket: BasketService) { }
  idProvider: number;
  provider: User;
  services: Service[];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.idProvider = params['idProvider'];
      this.loadUser();
    });
  }

  loadUser(): void {
    this.auth.getUser(this.idProvider)
      .subscribe(provider => {
        this.provider = provider;
        this.loadServices();
      }, error2 => {
        log(error2);
      });
  }

  loadServices(): void {
    this.service.getProviderServices(this.idProvider)
      .subscribe(services => {
        this.services = services;
      }, error2 => {
        log(error2);
      });
  }
  addItem(service: Service) {
    this.basket.addToBasket([service]);
  }

}
