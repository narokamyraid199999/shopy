import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { productDetails } from 'src/app/shared/core/interfaces/product-details';
import { CartService } from 'src/app/shared/core/services/cart.service';
import { ProductService } from 'src/app/shared/core/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private _productService: ProductService,
    private _cartService: CartService
  ) {}

  totalPrice: number = 0;

  shipping: string = '';

  oldTotalPrice: number = 0;

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.totalPrice = 0;
    this._cartService.foodList.subscribe((data) => {
      this.products = data;
      console.log('cart data', this.products);
      this.getTotalPrice();
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

  deleteProduct(product: productDetails) {
    this._cartService.deleteFood(product);
    this.getAllProducts();
  }

  products: productDetails[] = [];

  clearCart() {
    this._cartService.clearCart();
  }
}
