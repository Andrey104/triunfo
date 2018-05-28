import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Observable} from 'rxjs/index';
import {BaseApi} from '../core/base-api';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  login(user: User): Observable<User> {
    return this.loginRequest('token/', user);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
  }

  isLogin() {
    return localStorage.getItem('token');
  }

  registration(user: User) {
    return this.postNoAuth('users/', user);
  }

  getUserName() {
    return localStorage.getItem('userName');
  }

  getUserRole() {
    return localStorage.getItem('userRole');
  }
}
