import { Component, OnInit } from '@angular/core';
import {Category} from '../models/category';
import {Subcategory} from '../models/subcategory';
import {Service} from '../models/service';
import {DatabaseService} from "../services/database.service";
import {Type} from "../models/type";
import {log} from "util";
import {ServiceService} from "../services/service.service";
import {Router} from '@angular/router';
import {SubType} from "../models/sub-type";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  shadow = false;
  constructor(private db: DatabaseService,
              private service: ServiceService,
              private router: Router) { }
  categories: Category[];
  types: Type[];
  subtypes: SubType[];
  ngOnInit() {
    this.categories = this.db.getCategories();
    this.loadTypes();

  }

  loadTypes(): void {
    this.service.getTypes()
      .subscribe(types => {
        this.types = types;
        this.loadSubTypes();
      }, error2 => {
        log(error2);
      });
  }

  loadSubTypes(): void {
    this.service.getSubTypes()
      .subscribe(subtypes => {
        this.subtypes = subtypes;
      }, error2 => {
        log(error2);
      });
  }

  showSubType(typeId, subtypeId) {
    if (typeId === subtypeId) { return true; }
  }




}
