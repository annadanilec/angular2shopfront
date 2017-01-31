import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';

import { AppRoutingModule } from './routing/app-routing.module';

//Imports for loading & configurating the in-memory web app-routing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './api/in-memory-data.service';
//Components
import { AppComponent }  from './app.component';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { ClothesComponent }  from './components/clothes/clothes.component';
import { CartComponent }  from './components/cart/cart.component';
import { PaymentComponent }  from './components/payment/payment.component';
import { ClothDetailComponent }  from './components/cloth-detail/cloth-detail.component';

//Services
import { ClothesService }  from './services/clothes.service';
import { CartService }  from './services/cart.service';

//Pipes
import { CategoryFilterPipe }  from './pipes/category-filter.pipe';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ClothesComponent,
    CategoryFilterPipe,
    CartComponent,
    ClothDetailComponent,
    PaymentComponent
  ],
  providers: [
    ClothesService,
    CartService
  ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
