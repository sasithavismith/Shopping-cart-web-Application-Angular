import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems=[
    // {id: 1,productId:1,productName: 'Test 1' ,qty: 4, price:130 },
    // {id: 2,productId:1,productName: 'Test 2' ,qty: 2, price:120 },
    // {id: 3,productId:1,productName: 'Test 3' ,qty: 3, price:140 },
    // {id: 4,productId:1, productName: 'Test 4' ,qty: 4, price:100 },
  ];
  cartTotal = 0
  constructor(private msg:MessengerService ) { }

ngOnInit(): void {
  this.msg.getMsg().subscribe((product: Product)=>{
  this.addProductTocart(product)
  })
  }
  addProductTocart(product: Product){

let productExists =false

for(let i in this.cartItems){
  if(this.cartItems[i].productId === product.id) {
  this.cartItems[i].qty++
  productExists=true
  break;
}
}
if(!productExists){
  this.cartItems.push({
    productId: product.id,
    productName: product.name,
    qty: 1,
    price:product.price

  })
}




    
    this.cartTotal=0
    this.cartItems.forEach(item=>{
     this.cartTotal += (item.qty * item.price)
   })
  }
}

