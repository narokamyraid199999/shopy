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
export class WishlistComponent implements OnInit {
  constructor(
    private _productService: ProductService,
    private _activeRoute: ActivatedRoute
  ) {}

  items: MenuItem[] = [];

  home: MenuItem | undefined;

  paths: string[] = [];

  ngOnInit() {
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
  }
  products: productDetails[] = [];
}
