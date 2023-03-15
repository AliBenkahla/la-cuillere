import { Injectable } from "@angular/core";
import { Restaurants } from "../models/restaurants.model";

@Injectable({
 providedIn: 'root'
})

export class RestaurantArrayService {
    restaurantArray : Restaurants[] = [
          {
            id : 1,
            name : 'The Resto',
            department : '92',
            note : 5,
            cuisine :'marocain',
            imageUrl : 'https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_1280.jpg',
            certification : "AVS"
          },
          {
            id : 2,
            name : 'Le Diez',
            department: '93',
            note : 9,
            cuisine : 'tunisien',
            imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/345px-Three_Rock_Mountain_Southern_Tor.jpg'
          },
          {
            id : 3,
            name : 'Le Parisien',
            department: '75',
            note : 7,
            cuisine : 'francais',
            imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Gaggenau_2016_-Restaurant-_by-RaBoe_118.jpg/345px-Gaggenau_2016_-Restaurant-_by-RaBoe_118.jpg'
          },
          {
            id : 4,
            name : 'El Menzel',
            department: '93',
            note : 8,
            cuisine : 'marocain',
            imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Vendeuse_de_nourriture_02.jpg/640px-Vendeuse_de_nourriture_02.jpg',
            certification : "AVS"
          },
          {
            id : 5,
            name : 'kkk',
            department: '93',
            note : 5,
            cuisine : 'francais',
            imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Vendeuse_de_nourriture_02.jpg/640px-Vendeuse_de_nourriture_02.jpg',
            certification : "AVS"
          }
    ]

getAllRestaurants() : Restaurants[] {
  return this.restaurantArray;
}

getRestaurantsDpt(restaurantDpt : string) : Restaurants[] {
  return this.restaurantArray.filter((s)=>s.department === restaurantDpt);
}


getRestaurantById(restaurantId : number) : Restaurants {
  const restaurant = this.restaurantArray.find(restaurant => restaurant.id === restaurantId);
  if (!restaurant){
    throw new Error('restaurant not found!');
  } else {
    return (restaurant);
  }

}

getRestaurantByDpt(restaurantDpt : string) : Restaurants[] {
  const restaurant = this.restaurantArray.filter(restaurant => restaurant.department === restaurantDpt);
  return restaurant;
}

sortRestaurantsByPrice(){
  const restaurant = this.restaurantArray.sort((a, b) => a.note - b.note);
  return restaurant;
}

}