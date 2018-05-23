import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-helper-result-element',
  templateUrl: './helper-result-element.component.html',
  styleUrls: ['./helper-result-element.component.css']
})
export class HelperResultElementComponent implements OnInit {

  constructor() { }
  @Input() resultElement;
  ngOnInit() {
  }

}
