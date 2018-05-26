import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

  constructor() { }
  user: User;
  ngOnInit() {
    this.user = new User();
    this.user.name = 'Екатерина';
    this.user.phone = '8(909)977-44-54';
    this.user.email = 'katya@mail.ru';
  }

}
