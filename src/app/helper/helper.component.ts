import { Component, OnInit } from '@angular/core';
import {HelperResult} from '../models/helper-result';
import {HelperResultElement} from '../models/helper-result-element';
import {Service} from '../models/service';
import {Basket} from '../models/basket';
import {BasketService} from '../services/basket.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from "../services/service.service";
import {Helper} from "../models/helper";
import {User} from "../models/user";

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent implements OnInit {

  constructor(private basketService: BasketService,
              private service: ServiceService) { }
  helperOpen = true;
  helperResultOpen = false;
  providers: User[];
  result: HelperResult;

  helper: FormGroup = new FormGroup({
    action: new FormControl('', Validators.required),
    count: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    sum: new FormControl('', Validators.required),
    wishes: new FormControl('', Validators.required),
  });

  ngOnInit() {
    // this.helperInit();
  }

  helperInit() {
    this.result = new HelperResult();
    const resultElement1 = new Service();
    resultElement1.type = 0;
    resultElement1.id = 1;
    resultElement1.name = 'Виктор Макаров';
    resultElement1.date = '21.02.2019';
    resultElement1.time = '21:20';
    resultElement1.priceT = '30000 р';
    resultElement1.price = 30000;
    const resultElement2 = new Service();
    resultElement2.type = 1;
    resultElement2.id = 2;
    resultElement2.name = 'Екатерина';
    resultElement2.date = '21.02.2019';
    resultElement2.time = '21:20';
    resultElement2.priceT = '10000 р';
    resultElement2.price = 10000;
    const resultElement3 = new Service();
    resultElement3.type = 2;
    resultElement3.id = 3;
    resultElement3.name = 'Ресторан "Вильнус"';
    resultElement3.date = '21.02.2019';
    resultElement3.time = '21:20';
    resultElement3.priceT = '3000 р/человек + 10000 аренда';
    resultElement3.price = 3000;
    const resultElement4 = new Service();
    resultElement4.type = 3;
    resultElement4.id = 4;
    resultElement4.name = 'Декор-агенство "Виктория"';
    resultElement4.date = '21.02.2019';
    resultElement4.time = '21:20';
    resultElement4.priceT = '15000 р';
    resultElement4.price = 15000;
    this.result.elements = [resultElement1, resultElement2, resultElement3, resultElement4];
  }

  openHelperResult() {
    const helper = new Helper();
    helper.action = this.helper.value.action;
    helper.count = this.helper.value.count;
    helper.date = this.helper.value.date;
    helper.sum = this.helper.value.sum;
    helper.wishes = this.helper.value.wishes;

    this.service.getHelper(helper).subscribe(data => {
      if (data) {
        this.providers = data;
        this.helperOpen = false;
        this.helperResultOpen = true;
      }
    }, error2 => {
      alert('Ошибка! Попробуйте снова!');
    });

  }


}
