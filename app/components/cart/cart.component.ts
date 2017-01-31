import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cloth } from './../../models/cloth';
import { CartService } from './../../services/cart.service';


@Component({
  moduleId: module.id,
  selector: 'cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})

export class CartComponent implements OnInit {
  clothes: Cloth[];

  private cart:any= {
    clothes: [],
    total: 0
  }

  constructor(
    private router: Router,
    private cartService: CartService) {
      this.cart = cartService.getCart();
    }

    delete(cloth:any): any {
      this.cart.clothes.splice(this.cart.clothes.indexOf(cloth), 1);
      this.cart.total = this.cart.total - cloth.price;
    }

    ngOnInit(): void {
    }
}
