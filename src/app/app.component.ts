import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private auth: AuthService) {}
  username = this.auth.getUserName();
  role = this.auth.getUserRole();

  isLogin() {
    return this.auth.isLogin();
  }

  logout () {
    this.auth.logout();
  }
}
