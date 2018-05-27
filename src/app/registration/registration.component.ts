import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/user';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) {
  }
  visibleProviderField = false;

  registration: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    site: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.registration.get('role').valueChanges.subscribe(value => {
      this.visibleProviderField = value === 2;
    });
  }

  ok() {
    const user = new User();
    user.username = this.registration.value.username;
    user.password = this.registration.value.password;
    user.email = this.registration.value.email;
    user.role = this.registration.value.role;
    user.name = this.registration.value.name;
    user.phone = this.registration.value.phone;
    user.address = this.registration.value.address;
    if (user.address === '') { user.address = null; }
    user.site = this.registration.value.site;
    if (user.site === '') { user.site = null; }

    this.auth.registration(user).subscribe(data => {
      this.router.navigate(['/login']);
    }, error2 => {
      alert('Ошибка! Попробуйте снова!');
    });
  }

}
