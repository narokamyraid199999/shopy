import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { productDetails } from 'src/app/shared/core/interfaces/product-details';

@Component({
  selector: 'app-deals-of-day',
  templateUrl: './deals-of-day.component.html',
  styleUrls: ['./deals-of-day.component.css'],
})
export class DealsOfDayComponent implements OnInit {
  ngOnInit(): void {
    this.updateId();
  }

  updateId() {
    for (let i = 0; i < this.DealsProducts.length; i++) {
      this.DealsProducts[i].id = i + 13;
    }
    console.log('Deals products');
    this.DealsProducts.forEach((prod) => console.log(prod));
  }

  DealsProducts: productDetails[] = [
    {
      img: 'https://i.ibb.co/WVdTgR8/headphone-1.png',
      category: 'headphones',
      quantity: 5,
      title: 'Headphones Wireless.',
      reviews: 7,
      price: 103.2,
      discount: 120,
    },
    {
      img: 'https://i.ibb.co/n1YRvWJ/headphone-5.png',
      category: 'headphones',
      title: 'Gaming Headphone.',
      reviews: 7,
      quantity: 3,
      price: 123.5,
      discount: 130,
    },
    {
      img: 'https://i.ibb.co/5FPhGtq/headphone-8.png',
      category: 'Headphones',
      title: 'Headphone with Mic',
      quantity: 2,
      reviews: 7,
      price: 110.0,
    },
    {
      img: 'https://i.ibb.co/jvGv6qf/mobile-1.png',
      category: 'Mobile Tablets',
      title: 'Galaxy Android Tablet',
      quantity: 1,
      reviews: 7,
      price: 288.0,
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 10000,
    margin: 20,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };
}
