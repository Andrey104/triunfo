import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../core/base-api';
import {Observable} from 'rxjs/index';
import {Service} from '../models/service';
import {SubType} from '../models/sub-type';
import {Type} from '../models/type';
import {User} from '../models/user';
import {Order} from "../models/order";
import {Helper} from "../models/helper";
import {ImageC} from "../models/image";

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
  getProviders(subtype: number): Observable<User[]> {
    return this.getNoAuth(`users/?subtype=${subtype}`);
  }
  getProviderServices(provider: number): Observable<Service[]> {
    return this.getNoAuth(`services/?provider=${provider}`);
  }
  addOrder(order: Order<number>): Observable<Order<number>> {
    return this.post(`orders/`, order);
  }
  getOrders(): Observable<Order<Service>[]> {
    return this.get(`orders/`);
  }
  getOrder(id: number): Observable<Order<Service>> {
    return this.get(`orders/${id}`);
  }
  getHelper(helper: Helper): Observable<User[]> {
    return this.post(`helper/`, helper);
  }
  addImg(imageC: ImageC): Observable<Order<number>> {
    const formData = new FormData();
    formData.append('image', imageC.file[0]);
    formData.append('service', imageC.service);
    return this.postImg(`images/`, formData);
  }
}
