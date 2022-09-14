import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCartComponent } from './product-cart/product-cart.component';
import {OrderListModule} from 'primeng/orderlist';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    OrderListModule,
    CarouselModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputNumberModule,
    FormsModule,
    ToastModule
  ],
  declarations: [ProductDetailsComponent, ProductCartComponent],
  exports: [ProductDetailsComponent, ProductCartComponent]
})
export class ProductModule { }
