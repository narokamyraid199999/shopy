import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productDetails } from '../interfaces/product-details';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor() {
    this.updateLocalStorage();
  }

  favFoodsList: BehaviorSubject<productDetails[]> = new BehaviorSubject<
    productDetails[]
  >([]);
  favFoods: productDetails[] = [];

  updateLocalStorage(food: productDetails = {} as productDetails) {
    if (food?.title?.length > 0) {
      if (localStorage.getItem('wishlist')) {
        this.favFoodsList.next(
          JSON.parse(`${localStorage.getItem('wishlist')}`)
        );
      }
      this.favFoods.unshift(food);
      this.favFoodsList.next(this.favFoods);
      this.favFoodsList.subscribe((data) => {
        localStorage.setItem('wishlist', JSON.stringify(data));
        console.log('food add to wishlist', data);
      });
    } else {
      console.log('in localstorage');
      let localFood: productDetails[] = [];
      localFood = JSON.parse(`${localStorage.getItem('wishlist')}`);
      console.log(localFood);
      this.favFoodsList.next(localFood);
      this.favFoodsList.subscribe((data) => {
        console.log('wishlist from localStorage', data);
      });
    }
  }

  clearCart() {
    localStorage.removeItem('wishlist');
    this.updateLocalStorage();
    this.favFoods = [];
    this.favFoodsList.next(this.favFoods);
  }

  deleteFood(food: productDetails) {
    let temp: productDetails[] = JSON.parse(
      `${localStorage.getItem('wishlist')}`
    );
    let res: productDetails[] = temp.filter((elm) => elm?.id != food?.id);
    localStorage.setItem('wishlist', JSON.stringify(res));
    this.favFoodsList.next(res);
  }
}
