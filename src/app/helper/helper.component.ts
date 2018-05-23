import { Component, OnInit } from '@angular/core';
import {HelperResult} from '../models/helper-result';
import {HelperResultElement} from '../models/helper-result-element';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent implements OnInit {

  constructor() { }
  helperOpen = true;
  helperResultOpen = false;
  result: HelperResult;

  ngOnInit() {
    this.result = new HelperResult();
    const resultElement1 = new HelperResultElement();
    resultElement1.type = 0;
    resultElement1.name = 'Катя';
    resultElement1.date = '21.02.2012';
    resultElement1.time = '21:20';
    resultElement1.price = '500 р/час';

    const resultElement2 = new HelperResultElement();
    resultElement2.type = 1;
    resultElement2.name = 'Катя';
    resultElement2.date = '21.02.2012';
    resultElement2.time = '21:20';
    resultElement2.price = '500 р/час';
    const resultElement3 = new HelperResultElement();
    resultElement3.type = 2;
    resultElement3.name = 'Катя';
    resultElement3.date = '21.02.2012';
    resultElement3.time = '21:20';
    resultElement3.price = '500 р/час';
    const resultElement4 = new HelperResultElement();
    resultElement4.type = 3;
    resultElement4.name = 'Катя';
    resultElement4.date = '21.02.2012';
    resultElement4.time = '21:20';
    resultElement4.price = '500 р/час';
    this.result.elements = [resultElement1, resultElement2, resultElement3, resultElement4];
  }

  openHelperResult() {
    this.helperOpen = false;
    this.helperResultOpen = true;
  }

}
