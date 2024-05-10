import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface article {
  img: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-blog-and-posts',
  templateUrl: './blog-and-posts.component.html',
  styleUrls: ['./blog-and-posts.component.css'],
})
export class BlogAndPostsComponent {
  trendyProducts: article[] = [
    {
      img: 'https://shofy-angular.vercel.app/assets/img/blog/blog-3.jpg',
      title: 'The Sound Of Fashion: Malcolm',
      desc: 'The world is an amazing place providing an incredible assortment of interesting locations across.',
    },
    {
      img: 'https://shofy-angular.vercel.app/assets/img/blog/blog-2.jpg',
      title: 'How clothes are linked to climate',
      desc: 'The world is an amazing place providing an incredible assortment of interesting locations across.',
    },
    {
      img: 'https://shofy-angular.vercel.app/assets/img/blog/blog-1.jpg',
      title: 'The Sound Of Fashion: Malcolm',
      desc: 'The world is an amazing place providing an incredible assortment of interesting locations across.',
    },
    {
      img: 'https://shofy-angular.vercel.app/assets/img/blog/blog-1.jpg',
      title: 'How clothes are linked to climate',
      desc: 'The world is an amazing place providing an incredible assortment of interesting locations across.',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 20000,
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
