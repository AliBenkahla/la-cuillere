import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantArrayService } from '../services/restaurant-array.service';
import { Restaurants } from '../models/restaurants.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-restaurant-list-test',
  templateUrl: './restaurant-list-test.component.html',
  styleUrls: ['./restaurant-list-test.component.scss'],
})
export class RestaurantListTestComponent implements OnInit {

  urlDpt! : string;
  restaurantArray! : Restaurants[];
  form! : FormGroup;


  constructor(  private route : ActivatedRoute,
                private router : Router,
                private restaurantArrayService: RestaurantArrayService,
                private formBuilder: FormBuilder) {

                }

                submit() { 
                 
                  
                  console.log(this.form.value);
                 }


               

  ngOnInit() {
    this.urlDpt = this.route.snapshot.params['dpt'];
    console.log(this.urlDpt);

    this.restaurantArray = this.restaurantArrayService.getRestaurantsDpt(this.urlDpt);
    console.log(this.restaurantArray);
  }

  onSortRestaurantsAscendant() {
    this.restaurantArray = this.restaurantArray.sort((a, b) => a.note - b.note);
    console.log(this.restaurantArray);
  }

  onSortRestaurantsDescendant(){
    this.restaurantArray = this.restaurantArray.sort((b, a) => a.note - b.note);
    console.log(this.restaurantArray);
  }

}