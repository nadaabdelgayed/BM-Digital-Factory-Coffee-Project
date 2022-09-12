import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCartComponent } from './product-cart/product-cart.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ProductComponent, ProductDetailsComponent, ProductCartComponent],
  exports: [ProductDetailsComponent, ProductCartComponent]
})
export class ProductModule { }
