import { Component, OnInit } from '@angular/core';
import {log} from 'util';
import {ServiceService} from '../services/service.service';
import {Service} from '../models/service';
import {AuthService} from "../services/auth.service";
import {User} from "../models/user";

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {

  constructor(private service: ServiceService,
              private auth: AuthService) { }
  services: Service[];
  user: User;
  ngOnInit() {
    this.user = this.auth.getAuthUser();
    this.load();
  }

  load(): void {
    this.service.getProviderServices(this.user.id)
      .subscribe(services => {
        this.services = services;
      }, error2 => {
        log(error2);
      });
  }
}
