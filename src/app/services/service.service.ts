import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../core/base-api';
import {Observable} from 'rxjs/index';
import {Service} from '../models/service';
import {SubType} from '../models/sub-type';
import {Type} from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }
  getServices(): Observable<Service[]> {
    return this.getNoAuth(`services/`);
  }
  addService(service: Service): Observable<Service> {
    return this.post(`services/`, service);
  }
  editService(service: Service): Observable<Service> {
    return this.put(`services/${service.id}/`, service);
  }
  getSubTypes(): Observable<SubType[]> {
    return this.getNoAuth(`subtypes/`);
  }

  getTypes(): Observable<Type[]> {
    return this.getNoAuth(`types/`);
  }
}
