import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from './LoginRespose.model';
import { RegisterData } from './register/registerData.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  options={
    headers:new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  }
  data=new URLSearchParams();
  url="https://coffee-eg.herokuapp.com/api/login";
 
constructor(private http:HttpClient) { }

logIn(email:string,password:string):Observable<LoginResponse>{
  this.data.set('email', email? email:"");
    this.data.set('password',password? password:"");
    return this.http.post<LoginResponse>(this.url,this.data,this.options);
}
register(user:RegisterData){
  return this.http.post('https://coffee-eg.herokuapp.com/api/user/save',user);
}

}
