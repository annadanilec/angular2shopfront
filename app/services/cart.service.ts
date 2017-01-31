import { Injectable } from '@angular/core';
import { Cloth } from './../models/cloth';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CartService {
    private cart:any= {
      clothes: [],
      total: 0
    }
    addToCart(cloth:any): any {
      this.cart.clothes.push(cloth);
      this.cart.total = this.cart.total + cloth.price;
    }

    getCart() {
      return this.cart;
    }
}
