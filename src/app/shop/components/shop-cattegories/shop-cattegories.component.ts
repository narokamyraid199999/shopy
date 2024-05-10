import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Category } from 'src/app/shared/core/interfaces/category';
import { ProductService } from 'src/app/shared/core/services/product.service';

@Component({
  selector: 'app-shop-cattegories',
  templateUrl: './shop-cattegories.component.html',
  styleUrls: ['./shop-cattegories.component.css'],
})
export class ShopCattegoriesComponent {
  constructor(private _productService: ProductService) {}

  categories: Category[] = [
    {
      title: 'Headphones',
      item: 3,
    },
    {
      title: 'Mobile Tablets',
      item: 3,
    },
    {
      title: 'CPU Heat Pipes',
      item: 2,
    },
    {
      title: 'Smart Watch',
      item: 3,
    },
    {
      title: 'Bluetooth',
      item: 2,
    },
    {
      title: 'Clothing',
      item: 4,
    },
    {
      title: 'Shoes',
      item: 2,
    },
    {
      title: 'Discover Skincare',
      item: 2,
    },
    {
      title: 'Beauty of Skin',
      item: 2,
    },
    {
      title: 'Awesome Lip Care',
      item: 2,
    },
    {
      title: 'Facial Care',
      item: 2,
    },
    {
      title: 'Bracelets',
      item: 3,
    },
    {
      title: 'Earrings',
      item: 3,
    },
    {
      title: 'Necklaces',
      item: 2,
    },
  ];
}
