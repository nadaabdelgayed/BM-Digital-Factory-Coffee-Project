import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiFunctionService<T> {

  constructor(@Inject(String) public connfigUrl: string, public http: HttpClient) {}

  get(): Observable<T> {
    return this.http.get<T>(this.connfigUrl);
  }
  getbyUsername(name:any): Observable<T> {
    return this.http.get<T>(this.connfigUrl + `/${name}`);
  }
  post(obj:any): Observable<T> {
    return this.http.post<T>(this.connfigUrl, obj)
  }
  delete(id:any): Observable<T> {
    return this.http.delete<T>(this.connfigUrl + `/${id}`);
  }
  put(obj:any, id:any): Observable<T> {
    return this.http.put<T>(this.connfigUrl + `/${id}`, obj)
  }
}
