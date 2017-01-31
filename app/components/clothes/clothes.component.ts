import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Models
import { Cloth } from './../../models/cloth';
//Services
import { ClothesService } from './../../services/clothes.service';
import { CartService } from './../../services/cart.service';

@Component({
  moduleId: module.id,
  selector: 'my-clothes',
  templateUrl: 'clothes.component.html',
  styleUrls: [ 'clothes.component.css' ],
  providers: [ ClothesService ]
})


export class ClothesComponent implements OnInit {
  clothes: Cloth[];
  categories = [
    {name: 'Dresses'},
    {name: 'Trousers'},
    {name: 'Tops'},
    {name: 'Shoes'},
    {name: 'Jackets'},
    {name: 'Accessories'}
  ];
  selectedCategory = '';

  constructor(
    private router: Router,
    private clothesService: ClothesService,
    private cartService: CartService
    ) { }

    addToCart(cloth: { price: number }) {
      this.cartService.addToCart(cloth);
    }
    getClothes(): void {
      this.clothesService.getClothes().then(clothes => this.clothes = clothes);
    }
    ngOnInit(): void {
      this.getClothes();
    }
    selectCategory(category:{name:string}){
      this.selectedCategory = category.name;
    }
    clearCategory(){
      this.selectedCategory = '';
    }
}
