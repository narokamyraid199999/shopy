import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { productDetails } from 'src/app/shared/core/interfaces/product-details';
import { ProductService } from 'src/app/shared/core/services/product.service';
import { WishlistService } from 'src/app/shared/core/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  constructor(
    private _productService: ProductService,
    private _wishlistService: WishlistService
  ) {}

  totalPrice: number = 0;

  shipping: string = '';

  oldTotalPrice: number = 0;

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.totalPrice = 0;
    this._wishlistService.favFoodsList.subscribe((data) => {
      if (data) {
        this.products = data;
        console.log('cart data', this.products);
        this.getTotalPrice();
      }
    });
  }

  increesPrice(price: number) {
    this.totalPrice = this.oldTotalPrice;
    this.totalPrice += price;
  }

  getTotalPrice() {
    if (this.products!.length > 0) {
      this.products?.forEach((prod) => (this.totalPrice += prod?.price));
      this.oldTotalPrice = this.totalPrice;
    }
  }

  products: productDetails[] = [];

  deleteProduct(product: productDetails) {
    this._wishlistService.deleteFood(product);
    this.getAllProducts();
  }

  clearCart() {
    this._wishlistService.clearCart();
  }
}
