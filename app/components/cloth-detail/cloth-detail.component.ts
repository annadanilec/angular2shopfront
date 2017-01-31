import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Cloth } from './../../models/cloth';
import { ClothesService } from './../../services/clothes.service';
import { CartService } from './../../services/cart.service';

@Component({
  moduleId: module.id,
  selector: 'cloth-detail',
  templateUrl: 'cloth-detail.component.html',
  styleUrls: [ 'cloth-detail.component.css' ]
})

export class ClothDetailComponent implements OnInit {
  cloth: Cloth;

  constructor(
    private clothesService: ClothesService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  
  addToCart(cloth: { price: number }) {
    this.cartService.addToCart(cloth);
    console.log(this.cartService.getCart())
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.clothesService.getCloth(+params['id']))
      .subscribe(cloth => this.cloth = cloth);
  }

  return(): void {
    this.location.back();
  }
}
