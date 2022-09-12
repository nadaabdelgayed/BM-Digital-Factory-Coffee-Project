import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  relatedProducts!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.setProducts(this.productService.getProducts()[0])
  }
  setProducts(product:Product):void{
    this.product = product;
    this.relatedProducts = this.productService.getProducts().filter(p => p.Id != this.product.Id);
  }
  addToCart(product: Product) {
    this.product.isAddedToCart = true;
    this.product.boughtItemsCount++;
  }
  changeProduct(product: Product) {
    this.setProducts(product);
  }
}
