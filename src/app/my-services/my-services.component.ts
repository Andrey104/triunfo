import { Component, OnInit } from '@angular/core';
import {log} from 'util';
import {ServiceService} from '../services/service.service';
import {Service} from '../models/service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {

  constructor(private service: ServiceService) { }
  services: Service[];
  ngOnInit() {
    this.load();
  }

  load(): void {
    this.service.getServices()
      .subscribe(services => {
        this.services = services;
      }, error2 => {
        log(error2);
      });
  }
}
