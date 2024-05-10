import { Component, OnInit } from '@angular/core';
import { productDetails } from 'src/app/shared/core/interfaces/product-details';
import { CartService } from 'src/app/shared/core/services/cart.service';
import { ProductService } from 'src/app/shared/core/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
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

  products: productDetails[] = [];
}
