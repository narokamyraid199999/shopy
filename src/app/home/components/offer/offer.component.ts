import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { productDetails } from 'src/app/shared/core/interfaces/product-details';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent {
  offerProducts: productDetails[] = [
    {
      img: 'https://shofy-angular.vercel.app/assets/img/banner/banner-slider-1.png',
      category: 'headphones',
      quantity: 3,
      title: 'Headphones Wireless.',
      reviews: 7,
      price: 103.2,
      discount: 120,
    },
    {
      img: 'https://shofy-angular.vercel.app/assets/img/banner/banner-slider-2.png',
      category: 'headphones',
      title: 'Gaming Headphone.',
      reviews: 7,
      quantity: 2,
      price: 123.5,
      discount: 130,
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
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
    },
    nav: true,
  };
}
