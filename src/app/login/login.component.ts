import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';


import {User} from '../models/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  username;
  password;
  loading = false;
  fail: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
  }
  myForm: FormGroup = new FormGroup({
    'userName': new FormControl('', Validators.required),
    'userPassword': new FormControl('', Validators.required),
  });
  ngOnInit() {
    this.logout();
  }
  login() {
    this.loading = true;
    const user = new User();
    user.username = this.username;
    user.password = this.password;
    if (this.authService.login(user)) {
      this.router.navigate(['/']);
    } else {
      this.fail = true;
    }
  }
  logout() {
    this.authService.logout();
  }
}
