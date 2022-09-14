export class Product {
    id!: number;
    name!: string;
    price!: number;
    image!: string;
    size: number=0;
    sugar!: number;
    descirption!: string;
    color: string='Brown';
    isAddedToCart: boolean=false;
    boughtItemsCount: number=1;
    category!: string;
}