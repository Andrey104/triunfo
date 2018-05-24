import { Component, OnInit } from '@angular/core';
import {Category} from '../models/category';
import {Subcategory} from '../models/subcategory';
import {Service} from '../models/service';
import {DatabaseService} from "../services/database.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  shadow = false;
  constructor(private db: DatabaseService) { }
  categories: Category[];
  ngOnInit() {
    this.categories = this.db.getCategories();
  }


}
