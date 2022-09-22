import { ProductCartService } from './../../product/product-cart/product-cart.service';
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
  constructor(http: HttpClient, private ProductCartService: ProductCartService) {
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
  logMe(token: string, email: string) {
    this.isLogin = true;
    this.fullName = email.split('@')[0];

    localStorage.setItem('token',token );
    localStorage.setItem('email', email);
    localStorage.setItem('fullName', this.fullName);
    // localStorage.setItem('loggedin', this.isLogin.toString());
  }
  logOut() {
    this.isLogin = false;
    this.fullName = '';

    localStorage.clear();

  }
}
