import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ProductCartService } from '../product-cart/product-cart.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  providers: [MessageService],
  styleUrls: ['./product-details.component.scss']
  // '../../../../node_modules/primeicons/primeicons.css',
  // '../../../../node_modules/primeng/resources/themes/lara-light-blue/theme.css',
  // '../../../../node_modules/primeng/resources/primeng.min.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  relatedProducts!: Product[];
  responsiveOptions;
  id:number;

  constructor(private productService: ProductService, private route:ActivatedRoute,
     private router:Router, private productCartService: ProductCartService, private messageService: MessageService) {
    
    this.id=Number(this.route.snapshot.params['id']);
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  ngOnInit() {
    this.setProducts(this.id)
  }
  setProducts(id:number):void{
    // this.product = product;
    // this.relatedProducts = this.productService.getProducts().filter(p => p.id != this.product.id);
    this.productService.getProducts().subscribe(products => {
      
      this.product = (products.find(p => p.id == id)) as Product;
      this.product.boughtItemsCount = 1;
      this.relatedProducts = products.filter(p => p.id != this.product.id);
    });
    
  }
  addToCart(product: Product) {
    // this.product.isAddedToCart = true;
    // this.product.boughtItemsCount++;
    this.productCartService.addToCart(product);
    this.showSuccess();
    product.boughtItemsCount = 1;
  }
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Item added to cart'});
  }
  changeProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
    this.setProducts(product.id);
  }
  incrementAmount(){
    this.product.boughtItemsCount++;
  }
  decrementAmount(){
    if(this.product.boughtItemsCount > 1){
      this.product.boughtItemsCount--;
    }
  }
}
