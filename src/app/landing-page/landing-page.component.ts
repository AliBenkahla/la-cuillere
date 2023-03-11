import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurants } from '../models/restaurants.model';
import { RestaurantArrayService } from '../services/restaurant-array.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  restaurants! : Restaurants;

  constructor(private router : Router,
              private restaurantArrayService : RestaurantArrayService) { }



  ngOnInit(){

  }

  getNextPage(){
    this.router.navigateByUrl(`restaurant-list`);
  }

   
  
  }





