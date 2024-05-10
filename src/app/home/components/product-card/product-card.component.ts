import { Component, Input } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/shared/core/services/product.service';
import { CartService } from 'src/app/shared/core/services/cart.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { productDetails } from 'src/app/shared/core/interfaces/product-details';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/shared/core/services/wishlist.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    RatingModule,
  ],
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  constructor(
    private _messageService: MessageService,
    private _productService: ProductService,
    private _cartService: CartService,
    private _Router: Router,
    private _wishlistService: WishlistService
  ) {}

  @Input()
  product: productDetails | undefined;

  @Input() inCart: boolean = false;

  raiting: number = 3;

  goToDetails() {
    this._Router.navigate(['/shop/productDetails', this.product?.title]);
  }

  addToCart(prod: productDetails | undefined) {
    this._cartService.updateLocalStorage(prod);
    this._messageService.add({
      severity: 'success',
      detail: `${prod?.title} Added to cart`,
    });
  }

  addToWishlist(prod: productDetails | undefined) {
    this._wishlistService.updateLocalStorage(prod);
    this._messageService.add({
      severity: 'info',
      detail: `${prod?.title} Added to wishlist`,
    });
  }
}
