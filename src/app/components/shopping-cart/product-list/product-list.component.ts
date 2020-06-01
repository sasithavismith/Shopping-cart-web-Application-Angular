import { Component, OnInit , Input} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input() productItem: Product
  productList: Product[] =[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList= this.productService.getProduct()
  }

}
