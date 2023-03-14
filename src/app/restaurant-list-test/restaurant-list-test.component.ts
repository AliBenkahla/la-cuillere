import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantArrayService } from '../services/restaurant-array.service';
import { Restaurants } from '../models/restaurants.model';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';





@Component({
  selector: 'app-restaurant-list-test',
  templateUrl: './restaurant-list-test.component.html',
  styleUrls: ['./restaurant-list-test.component.scss'],
})
export class RestaurantListTestComponent implements OnInit {

  arr! :[];
  urlDpt! : string;
  restaurantArray! : Restaurants[];
  filteredRestaurants! : Restaurants[];
  Data: Array<any> = [
    { name: 'Tunisien', value: 'tunisien' },
    { name: 'Marocain', value: 'marocain' },
    { name: 'Francais', value: 'francais' },
  ];
  form: FormGroup = this.formBuilder.group({});

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantArrayService: RestaurantArrayService,
    private formBuilder: FormBuilder
  ) {
    this.Data.forEach((option) => {
      this.form.addControl(option.value, new FormControl(false));
    });
  }

  ngOnInit() {
    this.urlDpt = this.route.snapshot.params['dpt'];
    this.restaurantArray = this.restaurantArrayService.getRestaurantsDpt(this.urlDpt);
    this.form.setValue({
      tunisien: true,
      marocain: true,
      francais: true
    });
    this.submitForm();
  }

  onSortRestaurantsAscendant() {
    this.filteredRestaurants = this.filteredRestaurants.sort((a, b) => a.note - b.note);
    console.log(this.restaurantArray);
  }

  onSortRestaurantsDescendant(){
    this.filteredRestaurants = this.filteredRestaurants.sort((b, a) => a.note - b.note);
    console.log(this.restaurantArray);
  }

  submitForm() {

    let items = this.form.value;
    console.log(items)
    let selectedCuisines = Object.keys(items).filter(key => items[key]);
    console.log(selectedCuisines)

    if (selectedCuisines.length > 0) {
      this.filteredRestaurants = this.restaurantArray.filter(restaurant => {
        // Check if the cuisine of restaurant matches the selected cuisine and the corresponding item in items is true
        return Object.keys(items).some(cuisine => restaurant.cuisine === cuisine && items[cuisine]);
      });
    }
  }


}


