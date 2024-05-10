import { Component, OnInit } from '@angular/core';
import { productDetails } from 'src/app/shared/core/interfaces/product-details';

@Component({
  selector: 'app-new-arrivel',
  templateUrl: './new-arrivel.component.html',
  styleUrls: ['./new-arrivel.component.css'],
})
export class NewArrivelComponent implements OnInit {
  ngOnInit(): void {
    this.updateId();
  }

  updateId() {
    for (let i = 0; i < this.trendyProducts.length; i++) {
      this.trendyProducts[i].id = i + 9;
    }
    this.trendyProducts.forEach((prod) => console.log(prod));
  }

  trendyProducts: productDetails[] = [
    {
      img: 'https://i.ibb.co/yRRLCc5/watch-1.png',
      category: 'smart watch',
      quantity: 13,
      title: 'sony Smart Watch .',
      reviews: 7,
      price: 190,
      discount: 120,
    },
    {
      img: 'https://i.ibb.co/j4sDV3Q/watch-5.png',
      category: 'smart watch',
      title: 'sony Lady Fitness Watch .',
      reviews: 7,
      quantity: 3,
      price: 210,
      discount: 130,
    },
    {
      img: 'https://i.ibb.co/fMhtt2T/watch-9.png',
      category: 'Bluetooth',
      title: 'Lenovo Wireless Bluetooth ',
      reviews: 7,
      quantity: 8,
      price: 160.0,
    },
    {
      img: 'https://i.ibb.co/RYST3Ym/blutooth-4.png',
      category: 'Bluetooth',
      title: 'Lenovo Sports Bluetooth ',
      reviews: 7,
      quantity: 11,
      price: 117.0,
    },
  ];
}
