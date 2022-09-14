import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
constructor(private http:HttpClient) { }

getProducts():Observable<Array<Product>> {
  return this.http.get<Array<Product>>('https://coffee-eg.herokuapp.com/api/items');
}
}
