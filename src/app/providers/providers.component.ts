import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service.service';
import {log} from 'util';
import {User} from '../models/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  constructor(private service: ServiceService,
              private activatedRoute: ActivatedRoute) { }
  providers: User[];
  id: number;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['idSubType'];
      this.load();
    });
  }

  load(): void {
    this.service.getProviders(this.id)
      .subscribe(providers => {
        this.providers = providers;
      }, error2 => {
        log(error2);
      });
  }

}
