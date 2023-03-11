import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RestaurantsComponent } from './restaurants/restaurants.component';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SingleRestaurantComponent } from './single-restaurant/single-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RestaurantListTestComponent } from './restaurant-list-test/restaurant-list-test.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    HeaderComponent,
    SingleRestaurantComponent,
    AddRestaurantComponent,
    LandingPageComponent,
    RestaurantListTestComponent,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
