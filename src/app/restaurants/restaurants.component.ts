import { Component, OnInit, Input } from '@angular/core';
import { Restaurants } from '../models/restaurants.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})

export class RestaurantsComponent implements OnInit {
  @Input() restaurants! : Restaurants;

  constructor (private router : Router) {}

  
  ngOnInit(){    
  }

onViewSnap(){
  this.router.navigateByUrl(`restaurants/${this.restaurants.id}`);

}
 

}


