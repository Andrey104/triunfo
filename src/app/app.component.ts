import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private auth: AuthService,
              private activatedRoute: ActivatedRoute) {}
  username;
  role;

  ngOnInit() {
    this.update();
  }

  isLogin() {
    return this.auth.isLogin();
  }

  logout () {
    this.auth.logout();
  }

  isProvider(): boolean {
    if (this.role === '2') { return true; }
  }

  isClient(): boolean {
    if (this.role === '1') { return true; }
  }

  update() {
    this.username = this.auth.getUserName();
    this.role = this.auth.getUserRole();
  }
}
