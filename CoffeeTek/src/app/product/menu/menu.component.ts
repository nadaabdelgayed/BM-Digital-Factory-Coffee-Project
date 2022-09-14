import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { SelectItem } from 'primeng/api';
import { ProductService } from '../product.service';
import { ProductCartService } from '../product-cart/product-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],

})
export class MenuComponent implements OnInit {
  products!: Product[];

  sortOptions?: SelectItem[];

  sortOrder?: number;

  sortField?: string;


  constructor(private productService: ProductService, private productCartService: ProductCartService,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
      this.products.forEach(product => {product.boughtItemsCount = 1;});
      console.log(data);
    });
  }
  Toast(product: Product) {
    this.productCartService.addToCart(product);
    const msg = document.getElementById('snackbar') as HTMLInputElement
    msg.className="show";
    setTimeout(() => {
      msg.className=msg.className.replace("show","")
    }, 3000);

  }
  goToItem(id:number){
    this.router.navigate(['/product', id]);

  }
}
