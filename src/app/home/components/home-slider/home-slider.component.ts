import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css'],
})
export class HomeSliderComponent {
  title: string = 'gamer';

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    margin: 100,
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
