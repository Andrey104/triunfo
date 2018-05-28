import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from '../services/service.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user';

@Component({
  selector: 'app-helper-result',
  templateUrl: './helper-result.component.html',
  styleUrls: ['./helper-result.component.css']
})
export class HelperResultComponent implements OnInit {

  constructor(private service: ServiceService,
              private activatedRoute: ActivatedRoute) { }
  @Input() providers: User[];
  id: number;

  ngOnInit() {
  }

}
