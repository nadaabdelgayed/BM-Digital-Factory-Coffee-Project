import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiFunctionService } from '../../api-function.service';
import { logData } from './logData';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ApiFunctionService<logData> {
  isLogin: boolean = false;
  fullName: string = '';
  constructor(http: HttpClient) {
    super("https://coffee-eg.herokuapp.com/api/login", http)
    // if (localStorage.getItem('fsfdsg') == 'sdgdg') {
    //   this.isLogin = true;
    //   this.fullName = localStorage.getItem('fullName') || '';

    // }
    if(localStorage.getItem('token')){
      this.isLogin=true;
      this.fullName=localStorage.getItem('fullName')||'';
    }
  }
  logMe(token: string) {
    this.isLogin = true;
    this.fullName = "User";
    localStorage.setItem('token',token );
    localStorage.setItem('fullName', token)
    // localStorage.setItem('loggedin', this.isLogin.toString());
  }
  logOut() {
    this.isLogin = false;
    this.fullName = '';
    localStorage.clear();

  }
}
