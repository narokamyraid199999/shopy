import { AfterContentInit, Component } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { CartService } from '../core/services/cart.service';
import { productDetails } from '../core/interfaces/product-details';
import { Observable } from 'rxjs';
import { SideBarService } from 'src/app/home/core/services/side-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  constructor(
    private _productService: ProductService,
    private _cartService: CartService,
    private _sidebarService: SideBarService,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._cartService.foodList.subscribe((data) => {
      if (data) {
        this.totalPrice = 0;
        this.products = data;
        this.getTotalPrice();
        console.log('cart data', this.products);
      }
    });
  }

  getTotalPrice() {
    if (this.products!.length > 0) {
      this.products?.forEach((prod) => (this.totalPrice += prod?.price));
    }
  }

  totalPrice: number = 0;

  products: productDetails[] = [];

  goToCart(path: string): void {
    this._sidebarService.isOpend.next(false);

    this._Router.navigate([path]);
  }
}
