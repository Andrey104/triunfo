import {Component, Input, OnInit} from '@angular/core';
import {HelperResult} from '../models/helper-result';
import {HelperResultElement} from '../models/helper-result-element';
import {BasketService} from "../services/basket.service";

@Component({
  selector: 'app-helper-result',
  templateUrl: './helper-result.component.html',
  styleUrls: ['./helper-result.component.css']
})
export class HelperResultComponent implements OnInit {


  constructor(private basketService: BasketService) { }
  @Input() result: HelperResult;

  ngOnInit() {
  }

  toBasket () {
    this.basketService.addToBasket(this.result.elements);
  }

}
