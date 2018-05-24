import { Injectable } from '@angular/core';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: User) {
    if ((user.username === 'test') || (user.password === 'test')) {
      localStorage.setItem('auth', 'true');
      return true;
    } else {
      localStorage.setItem('auth', 'false');
      return false;
    }
  }

  logout() {
    localStorage.setItem('auth', 'false');
  }

  isLogin() {
    return localStorage.getItem('auth') === 'true';
  }
}
