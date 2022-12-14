import { DataServices } from './servcies/data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { RegistrationComponent } from './registration/registration.component';
// import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { ProductComponent } from './product/product.component';
// import { HeaderComponent } from './header/header.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ProductComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MdbCollapseModule,
    // NgbModule,
  ],
  providers: [DataServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
