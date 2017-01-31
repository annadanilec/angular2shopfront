import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './../components/dashboard/dashboard.component';
import { ClothesComponent }      from './../components/clothes/clothes.component';
import { PaymentComponent }      from './../components/payment/payment.component';
import { ClothDetailComponent }      from './../components/cloth-detail/cloth-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'clothes',    component: ClothesComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: ClothDetailComponent },
  { path: 'payment',     component: PaymentComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
