import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems=[
    {id: 1,productId:1,productName: 'Test 1' ,qty: 4, price:130 },
    {id: 2,productId:1,productName: 'Test 2' ,qty: 2, price:120 },
    {id: 3,productId:1,productName: 'Test 3' ,qty: 3, price:140 },
    {id: 4,productId:1, productName: 'Test 4' ,qty: 4, price:100 },
  ];
  cartTotal = 0
  constructor() { }
ngOnInit(): void {
  this.cartItems.forEach(item=>{
    this.cartTotal += (item.qty * item.price)
  })
  }

}
