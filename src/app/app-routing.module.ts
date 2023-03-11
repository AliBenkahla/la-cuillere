import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleRestaurantComponent } from './single-restaurant/single-restaurant.component';
import { RestaurantListTestComponent } from './restaurant-list-test/restaurant-list-test.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  //{
    //path: '',
    //redirectTo: 'homepage',
    //pathMatch: 'full'
  //},
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'restaurants/:id', component: SingleRestaurantComponent
  },
  {
  path: 'addrestaurant', component: AddRestaurantComponent
  },
  {
    path: 'restaurant-list-test/:dpt', component: RestaurantListTestComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
