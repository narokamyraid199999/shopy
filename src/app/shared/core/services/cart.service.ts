import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productDetails } from '../interfaces/product-details';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {
    this.updateLocalStorage();
  }

  foodList: BehaviorSubject<productDetails[]> = new BehaviorSubject<
    productDetails[]
  >([]);
  food: productDetails[] = [];

  updateLocalStorage(food: productDetails = {} as productDetails) {
    if (food?.title?.length > 0) {
      if (localStorage.getItem('products')) {
        this.foodList.next(JSON.parse(`${localStorage.getItem('products')}`));
      }
      this.food.unshift(food);
      this.foodList.next(this.food);
      this.foodList.subscribe((data) => {
        localStorage.setItem('products', JSON.stringify(data));
        console.log('food add to localStorage', data);
      });
    } else {
      console.log('in localstorage');
      let localFood: productDetails[] = [];
      localFood = JSON.parse(`${localStorage.getItem('products')}`);
      console.log(localFood);
      this.foodList.next(localFood);
      this.foodList.subscribe((data) => {
        console.log('food from localStorage', data);
      });
    }
  }

  clearCart() {
    localStorage.removeItem('products');
    this.updateLocalStorage();
    this.food = [];
    this.foodList.next(this.food);
  }

  deleteFood(food: productDetails) {
    let temp: productDetails[] = JSON.parse(
      `${localStorage.getItem('products')}`
    );
    let res: productDetails[] = temp.filter((elm) => elm.id != food.id);
    localStorage.setItem('products', JSON.stringify(res));
    this.foodList.next(res);
  }
}
