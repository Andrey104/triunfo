import {Component, Input, OnInit} from '@angular/core';
import {HelperResult} from '../models/helper-result';
import {HelperResultElement} from '../models/helper-result-element';

@Component({
  selector: 'app-helper-result',
  templateUrl: './helper-result.component.html',
  styleUrls: ['./helper-result.component.css']
})
export class HelperResultComponent implements OnInit {


  constructor() { }
  @Input() result: HelperResult;

  ngOnInit() {
  }

}
