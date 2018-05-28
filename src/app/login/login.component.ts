import {Component, OnInit} from '@angular/core';
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
    this.authService.login(user).subscribe(
      data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userName', data.user.name);
        localStorage.setItem('userRole', data.user.role.toString());
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.reload();
        this.router.navigate(['/']);
      },
      err => {
        console.log('Error:' + err.error);
        this.loading = false;
        if (err.status === 400) {
          this.fail = true;
        }
      }
    );
  }
  logout() {
    this.authService.logout();
  }
}

