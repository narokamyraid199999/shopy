import { Component, OnInit } from '@angular/core';
import { productDetails } from 'src/app/shared/core/interfaces/product-details';

@Component({
  selector: 'app-trend-products',
  templateUrl: './trend-products.component.html',
  styleUrls: ['./trend-products.component.css'],
})
export class TrendProductsComponent implements OnInit {
  ngOnInit(): void {
    this.updateId();
  }

  updateId() {
    for (let i = 0; i < this.trendyProducts.length; i++) {
      this.trendyProducts[i].id = i + 1;
    }
    this.trendyProducts.forEach((prod) => console.log(prod));
  }

  trendyProducts: productDetails[] = [
    {
      img: 'https://i.ibb.co/WVdTgR8/headphone-1.png',
      quantity: 10,
      category: 'headphones',
      title: 'Headphones Wireless.',
      reviews: 7,
      price: 103.2,
      discount: 120,
    },
    {
      img: 'https://i.ibb.co/n1YRvWJ/headphone-5.png',
      quantity: 15,
      category: 'headphones',
      title: 'Gaming Headphone.',
      reviews: 7,
      price: 123.5,
      discount: 130,
    },
    {
      img: 'https://i.ibb.co/5FPhGtq/headphone-8.png',
      quantity: 20,
      category: 'Headphones',
      title: 'Headphone with Mic',
      reviews: 7,
      price: 110.0,
    },
    {
      img: 'https://i.ibb.co/jvGv6qf/mobile-1.png',
      category: 'Mobile Tablets',
      quantity: 100,
      title: 'Galaxy Android Tablet',
      reviews: 7,
      price: 288.0,
    },
    {
      img: 'https://i.ibb.co/3WMPkkf/mobile-5.png',
      category: 'Mobile Tablets',
      title: 'iPhone 14 Pro',
      reviews: 7,
      quantity: 33,
      price: 1019.15,
    },
    {
      img: 'https://i.ibb.co/kxGMcrw/ipad-1.png',
      category: 'Mobile Tablets',
      quantity: 4,
      title: 'Apple iPad Air',
      reviews: 7,
      price: 949.05,
      discount: 999,
    },
    {
      img: 'https://i.ibb.co/wYZr4k6/cpu-1.png',
      category: 'CPU Heat Pipes',
      quantity: 35,
      title: 'DeepCool Air Cooler',
      reviews: 7,
      price: 80.0,
    },
    {
      img: 'https://i.ibb.co/tpypd3B/cpu-5.png',
      category: 'CPU Heat Pipes',
      title: 'Antec Air Cooler',
      quantity: 11,
      reviews: 7,
      price: 80.0,
    },
  ];
}
