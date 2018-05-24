import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../services/database.service';
import {Category} from '../models/category';
import {ActivatedRoute} from '@angular/router';
import {Subcategory} from '../models/subcategory';
import {Service} from '../models/service';
import {BasketService} from '../services/basket.service';
@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.css']
})
export class SubcategoryListComponent implements OnInit {

  constructor(private db: DatabaseService,
              private activatedRoute: ActivatedRoute,
              private basket: BasketService) { }
  services: Service[];
  id: number;
  cat: number;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.cat = params['cat'];
      this.services = this.db.getCategories()[0].subcategories[0].services;
    });
  }
  addItem(service: Service) {
    this.basket.addToBasket([service]);
  }



}
