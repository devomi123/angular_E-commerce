import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductComponent } from './admin/product/product.component';
import { ProductsComponent } from './admin/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ShowproductComponent } from './components/showproduct/showproduct.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';

const routes: Routes = [
  {path: "",component:HomeComponent},
  {path: "home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"admin/login",component:LoginComponent},
  {path:"admin/product",component:ProductComponent},
  {path:"admin/products",component:ProductsComponent},
  {path:"admin/products/:id",component:ProductsComponent},
  {path:"admin/product/:id",component:ProductComponent},
  {path:"showproducts" , component:ShowproductsComponent},
  {path:"showproducts/showproduct", component:ShowproductComponent},
  {path:"showproducts/:id", component:ShowproductComponent},
  {path : "admin/orders", component:OrdersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
