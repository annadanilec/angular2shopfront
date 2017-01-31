import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cloth } from './../../models/cloth';
import { CartService } from './../../services/cart.service';


@Component({
  moduleId: module.id,
  selector: 'payment',
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css']
})

export class PaymentComponent implements OnInit {
  clothes: Cloth[];
   //Delivery methods
  selectedDelivery: { [key: string]: any } = {
   price: null,
   method: null
 };
 deliveries = [
   {
     method: 'Personal pick up',
     price: 0
   },
   {
     method: 'Messenger',
     price: 30
   },
   {
     method: 'Postal parcel',
     price: 15
   }
 ];


  // One value of discount
  discountCodes = [
    'DISCOUNT1',
    'DISCOUNT2',
    'DISCOUNT3',
    'DISCOUNT4'
  ];

  discountAdded: boolean = false;

  // Multiple discount values depending on code
  discountCodeOne = {
    code: '20DISCOUNT',
    value: 20
  }
  discountCodeTwo = {
    code: '30DISCOUNT',
    value: 30
  }
  discountCodeThree = {
    code: '50DISCOUNT',
    value: 50
  }

  private cart:any= {
    clothes: [],
    total: 0
  }

  constructor(
    private router: Router,
    private cartService: CartService) {
      this.cart = cartService.getCart();
    }

    // One value of discount
    countDiscount(discount: HTMLInputElement): any {
      for (let i of this.discountCodes) {
        console.log(i);
        if(discount.value === i) {
          console.log('dziala');
          this.cart.total = this.cart.total - (this.cart.total * 0.1);
          discount.value = '';
          this.discountAdded = true;
        }
      }
    }

    // Multiple discount values depending on code
    countDiscountMultipleValues(discount: HTMLInputElement): any {
      if(this.discountCodeOne.code === discount.value) {
        this.cart.total = this.cart.total - (this.cart.total * (this.discountCodeOne.value/100));
        discount.value = '';
        this.discountAdded = true;
      }
      else if(this.discountCodeTwo.code === discount.value) {
        this.cart.total = this.cart.total - (this.cart.total * (this.discountCodeTwo.value/100));
        discount.value = '';
        this.discountAdded = true;
      }
      else if(this.discountCodeThree.code === discount.value) {
        this.cart.total = this.cart.total - (this.cart.total * (this.discountCodeThree.value/100));
        discount.value = '';
        this.discountAdded = true;
      }
    }

    ngOnInit(): void {
      // select the first one
      if(this.deliveries) {
        this.onSelectionChange(this.deliveries[0]);
      }
    }

    onSelectionChange(delivery: any): any {
      this.selectedDelivery = Object.assign({}, this.selectedDelivery, delivery);
    }
}
