import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './admin/login/login.component';
import { ApiServicesService } from './services/api-services.service';
import { CookieServicesService } from './services/cookie-services.service';
 import {HttpClient,HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './admin/product/product.component';
import { ProductsComponent } from './admin/products/products.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { ShowproductComponent } from './components/showproduct/showproduct.component';
import { OrdersComponent } from './admin/orders/orders.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProductComponent,
    ProductsComponent,
    ShowproductsComponent,
    ShowproductComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    ApiServicesService,
    CookieServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
