import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { productDetails } from 'src/app/shared/core/interfaces/product-details';
import { ProductService } from 'src/app/shared/core/services/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent {
  constructor(private _productService: ProductService) {}

  products: productDetails[] = [];
}
