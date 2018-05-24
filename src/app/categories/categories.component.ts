import { Component, OnInit } from '@angular/core';
import {Category} from '../models/category';
import {Subcategory} from '../models/subcategory';
import {Service} from '../models/service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }
  categories: Category[];
  ngOnInit() {
    const prof = new Category();
    prof.id = 1;
    prof.name = 'Профессионалы';

    const photo = new Subcategory();
    photo.id = 1; // уникальное поле
    photo.name = 'Фотографы';

    const service1 = new Service();
    service1.id = 1;
    service1.name = 'Оплата за час';
    service1.price = 3000;
    service1.description = ' Не более 3 часов';

    const service2 = new Service();
    service2.id = 2;
    service2.name = 'Оплата за день';
    service2.price = 15000;
    service2.description = 'Обработка фото через 3 дня';

    const guid = new Subcategory();
    guid.id = 2; // уникальное поле
    guid.name = 'Ведущие';

    const service3 = new Service();
    service3.id = 1;
    service3.name = 'Оплата за мероприятие';
    service3.price = 30000;
    service3.description = ' До 4 часов';

    const service4 = new Service();
    service4.id = 2;
    service4.name = 'Дополнительные часы';
    service4.price = 10000;
    service4.description = 'Оплата за каждый дополнительный час';

    photo.services = [service1, service2];
    guid.services = [service3, service4];
    prof.subcategories = [photo, guid];
    this.categories = [prof];
  }

}
