import { Component, OnInit , Input} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] =[]
  wishlist: number[]=[]
  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService) { }

  ngOnInit(): void {
this.loadProducts();
this.loadwishlist();

  }
loadProducts(){
  this.productService.getProducts().subscribe((products)=>{
    this.productList =products;
   
  })
}
loadwishlist(){
  this.wishlistService.getWishlist().subscribe(productIds =>{
    
    this.wishlist =productIds
  })
}
}
