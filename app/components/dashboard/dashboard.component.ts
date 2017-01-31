import { Component } from '@angular/core';
import { Cloth } from './../../models/cloth';
import { ClothesService } from './../../services/clothes.service';
import { CartService } from './../../services/cart.service';
import { OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ],
})

export class DashboardComponent implements OnInit {

  clothes: Cloth[] = [];

  constructor(
    private clothesService: ClothesService,
    private cartService: CartService) { }

  addToCart(cloth: { price: number }) {
    this.cartService.addToCart(cloth);
  }

  ngOnInit(): void {
    this.clothesService.getClothes()
      .then(clothes => this.clothes = clothes.slice(2, 6));
  }
}
