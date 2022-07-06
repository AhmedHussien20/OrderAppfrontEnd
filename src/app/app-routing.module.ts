import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderHeaderComponent } from './order-header/order-header.component';
import { OrderformComponent } from './orderform/orderform.component';


const routes: Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"orderlist",
    component:OrderHeaderComponent
  },
  {
    path:"orderlist/New",
    component:OrderformComponent
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
