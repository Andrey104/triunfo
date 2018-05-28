import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service.service';
import {log} from 'util';
import {SubType} from '../models/sub-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Service} from '../models/service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  constructor(private service: ServiceService,
              private router: Router) { }
  subtypes: SubType[];

  serviceForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
    subtype: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.loadSubTypes();
  }



  loadSubTypes(): void {
    this.service.getSubTypes()
      .subscribe(subtypes => {
        this.subtypes = subtypes;
      }, error2 => {
        log(error2);
      });
  }

  ok() {
    const service = new Service();
    service.name = this.serviceForm.value.name;
    service.price = this.serviceForm.value.price;
    service.details = this.serviceForm.value.details;
    service.sub_type = this.serviceForm.value.subtype;
    this.service.addService(service).subscribe(data => {
      this.router.navigate(['/my-services']);
    }, error2 => {
      alert('Ошибка! Попробуйте снова!');
    });
  }

}
