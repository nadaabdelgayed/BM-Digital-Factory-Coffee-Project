import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ProductCartService } from '../product-cart/product-cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  cartProducts!: Product[];  
  totalPrice!:number;

  constructor(private productService: ProductService, private productCartService: ProductCartService) { }

  ngOnInit() {
    this.setProducts();
    this.calculateTotalPrice();
  }
  setProducts():void{
    this.cartProducts = this.productCartService.getCart();
    console.log(this.cartProducts);
  }
  clearCart(){
    this.productCartService.clearCart();
    this.cartProducts = [];
    this.totalPrice = 0;
  }
  calculateTotalPrice(){
    this.totalPrice = 0;
    console.log(this.cartProducts);
    this.cartProducts.forEach(product => {
      this.totalPrice += product.price * product.boughtItemsCount;
      // this.totalPrice += product.price;
    });
  }

}
