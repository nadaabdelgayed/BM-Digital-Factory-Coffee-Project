import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  cart:Array<Product>;

constructor() { 
  this.cart = [];
}
addToCart(product: Product){
  let isPresent=false;
  this.cart=localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '{}') : []
  this.cart.forEach((prod:Product) => {
    if(prod.id==product.id){
      prod.boughtItemsCount+=product.boughtItemsCount;
      isPresent=true;
    }
  });
  if(!isPresent){
    this.cart.push(product);
  }
  localStorage.setItem('cart', JSON.stringify(this.cart));
}
clearCart(){
  this.cart = [];
  // localStorage.clear();
  localStorage.removeItem('cart');
}
getCart(){
  return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '{}') : [];
}

}
