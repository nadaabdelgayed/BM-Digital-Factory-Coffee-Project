import { LoginService } from '../user/login/login.service';
import { Component, OnInit } from '@angular/core';
import {MenuItem, PrimeIcons} from 'primeng/api';
import { Router } from '@angular/router';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isLogin:boolean;
    constructor( public loginService: LoginService, private router: Router) { 
        this.isLogin = this.loginService.isLogin;
    } 

     items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Home', icon:PrimeIcons.HOME,routerLink:'home'},
            {label: 'Menu', icon:PrimeIcons.LIST,routerLink:'menu'},
            {label: 'Profile', icon:PrimeIcons.USER,routerLink:'profile'},
            {label: 'Cart', icon:PrimeIcons.SHOPPING_CART,routerLink:'cart'}
            // {label: 'Log Out', icon:PrimeIcons.SIGN_OUT,LoginService.logout()}
    ];
    }
    logOut(){
        this.loginService.logOut();
    }
    logInOut(){
        if(this.loginService.isLogin){
            this.logOut();
        }else{
            this.router.navigate(['login']);
        }
    }

}

