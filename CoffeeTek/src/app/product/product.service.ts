import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
product:Product[] = [{
  Id: 1,
  Name: 'Cappuccino',
  Price: 5,
  Image: 'https://media.istockphoto.com/photos/cappuccino-with-coffee-beans-picture-id523168994?k=20&m=523168994&s=612x612&w=0&h=TeBPjACkecKqMILVDb6lWgEV1yfQpAt6u6EmkGttTrQ=',
  Size: 1,
  Sugar: 1,
  Description: 'Cappuccino is a coffee-based drink that originated in Italy, and is traditionally prepared with steamed milk foam.',
  Color: 'brown',
  isAddedToCart: false,
  boughtItemsCount: 0,
  Category: 'Coffee'
},
{
  Id: 2,
  Name: 'Espresso',
  Price: 4,
  Image: 'https://miro.medium.com/max/1400/1*z0kHxuWVU1ieO6OBAiwErA.jpeg',
  Size: 1,
  Sugar: 1,
  Description: 'Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely ground coffee beans.',
  Color: 'brown',
  isAddedToCart: false,
  boughtItemsCount: 0,
  Category: 'Coffee'
},
{
  Id: 3,
  Name: 'Latte',
  Price: 6,
  Image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F12%2F09%2Fspiked-vanilla-latte-trees-1x1-1.jpg&q=60',
  Size: 1,
  Sugar: 1,
  Description: 'Latte is a coffee-based drink made primarily from espresso and steamed milk.',
  Color: 'brown',
  isAddedToCart: false,
  boughtItemsCount: 0,
  Category: 'Coffee'
},
{
  Id: 4,
  Name: 'Mocha',
  Price: 7,
  Image:'https://food-images.files.bbci.co.uk/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg',
  Size: 1,
  Sugar: 1,
  Description: 'Mocha is a chocolate-flavored variant of a latte, made with chocolate syrup or powder, espresso, and steamed milk.',
  Color: 'brown',
  isAddedToCart: false,
  boughtItemsCount: 0,
  Category: 'Coffee'
},
{
  Id: 5,
  Name: 'Americano',
  Price: 5,
  Image:'https://enjoyjava.com/wp-content/uploads/2021/08/how-to-make-an-americano.jpg',
  Size: 1,
  Sugar: 1,
  Description: 'Americano is a type of coffee prepared by adding hot water to espresso, giving a similar strength to, but different flavor from traditionally brewed coffee.',
  Color: 'brown',
  isAddedToCart: false,
  boughtItemsCount: 0,
  Category: 'Coffee'

}];
constructor(private http:HttpClient) { }
getProducts():Product[] {
  return this.product;
}
}
