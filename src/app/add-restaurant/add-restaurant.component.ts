import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss'],
})
export class AddRestaurantComponent implements OnInit {

  restaurantName! : string;
  restaurantDepartment! : string;

  constructor() { }

  ngOnInit() {}

  onSubmitForm(form: NgForm) : void{
    console.log(form.value);
  }

}
