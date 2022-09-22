import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  httpCalling = false;
  email!:string;
  password1!:string;
  constructor(private _login: LoginService, private _router: Router ,private _http:HttpClient,private userService: UserService) { }

  ngOnInit(): void {
  }
  handleLogin() {
    this.httpCalling = true;
    this.userService.logIn(this.email, this.password1).subscribe((resp:any)=>{
      console.log(resp);
        if(resp.access_token){
          this._login.logMe(resp.access_token,resp.email);
          this._router.navigate(['home'])
        }else{
          alert(resp.error)
          this.httpCalling = false;

        }
    },error=>{
      alert(error.message)
      this.httpCalling = false;

    }
    );
  }
  goToSignUp(){
    this._router.navigate(['register']);
  }
}
