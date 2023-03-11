import { Component, OnInit } from '@angular/core';
import { Restaurants } from '../models/restaurants.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantArrayService } from '../services/restaurant-array.service';


@Component({
  selector: 'app-single-restaurant',
  templateUrl: './single-restaurant.component.html',
  styleUrls: ['./single-restaurant.component.scss'],
})

export class SingleRestaurantComponent implements OnInit {
  restaurants! : Restaurants;

  constructor(private restaurantArrayService : RestaurantArrayService,
            private route : ActivatedRoute) { }

  ngOnInit() {
    const restaurantId = +this.route.snapshot.params['id'];
    this.restaurants = this.restaurantArrayService.getRestaurantById(restaurantId);
  }


}
