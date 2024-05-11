import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { productDetails } from 'src/app/shared/core/interfaces/product-details';
import { CartService } from 'src/app/shared/core/services/cart.service';
import { ProductService } from 'src/app/shared/core/services/product.service';
import { City } from '../profile/components/information/information.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    private _productService: ProductService,
    private _cartService: CartService,
    private _messageService: MessageService
  ) {}

  gender: City[] = [
    { name: 'United State', code: 'us' },
    { name: 'Canada', code: 'ca' },
    { name: 'France', code: 'fa' },
    { name: 'Turkey', code: 'tk' },
    { name: 'Tokiyo', code: 'fa' },
  ];

  notes: string = '';
  billingForm: FormGroup = new FormGroup({});

  totalPrice: number = 0;

  shipping: string = '';

  oldTotalPrice: number = 0;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getAllProducts();
  }

  getAllProducts() {
    this.totalPrice = 0;
    this._cartService.foodList.subscribe((data) => {
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

  placeOrder() {
    this._messageService.add({
      severity: 'success',
      detail: 'Thank you for your order',
      life: 2000,
    });
  }

  products: productDetails[] = [];
}
