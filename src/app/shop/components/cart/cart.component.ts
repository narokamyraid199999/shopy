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
    private _cartService: CartService,
    private _activeRoute: ActivatedRoute
  ) {}

  items: MenuItem[] = [];

  home: MenuItem | undefined;

  paths: string[] = [];

  totalPrice: number = 0;

  shipping: string = '';

  oldTotalPrice: number = 0;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this._activeRoute.parent?.url.subscribe((data) => {
      console.log('parent ', data[0].path);
      this.paths?.push(data[0].path);
      this._activeRoute.url.subscribe((data) => {
        this.paths?.push(data[0].path);
      });
    });
    this.items = [{ icon: 'pi pi-home', routerLink: '/home' }];
    this.paths.forEach((path) => {
      this.items.push({ label: path });
    });

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

  clearCart() {
    this._cartService.clearCart();
  }
}
