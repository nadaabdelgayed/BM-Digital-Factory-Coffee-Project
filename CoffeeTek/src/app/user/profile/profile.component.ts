import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name:string;
  email:string;

  constructor(public loginService:LoginService) {
    this.name = localStorage.getItem('fullName') || '';
    this.email = localStorage.getItem('email') || '';
  }

  ngOnInit(): void {
  }

}
