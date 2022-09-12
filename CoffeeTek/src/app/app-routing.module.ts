import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCartComponent } from './product/product-cart/product-cart.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: ProductCartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
