import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { ProductCartComponent } from './product/product-cart/product-cart.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthGuard } from './user/auth.guard';
import { MenuComponent } from './product/menu/menu.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: ProductCartComponent,
  },  
  { path: 'login', redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "profile", canActivate: [AuthGuard], component: ProfileComponent },
  { path: "menu", component: MenuComponent },
  { path: "register", component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
