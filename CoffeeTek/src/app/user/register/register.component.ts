import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { UserService } from '../user.service';
import { RegisterData } from './registerData.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user :RegisterData={
    name:'',
    email:'',
    password:'',
  }
  httpCalling = false;

  constructor(private userService: UserService, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  handleRegisteration(){
    this.httpCalling = true;
    console.log(this.user);
    this.userService.register(this.user).subscribe((resp:any)=>{
      console.log(resp);
        if(resp.access_token){
          this.loginService.logMe(resp.access_token);
          this.router.navigate(['home'])
        }else{
          alert(resp.error)
          this.httpCalling = false;

        }
    },(error)=>{
      alert(error.message)
      this.httpCalling = false;
    }
    );
  }

}
