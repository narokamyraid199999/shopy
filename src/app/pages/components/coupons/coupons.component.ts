import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

export interface coupon {
  img: string;
  title: string;
  discount: number;
  code: string;
}
@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css'],
})
export class CouponsComponent {
  constructor() {}

  gifts: coupon[] = [
    {
      img: 'https://i.ibb.co/kxGMcrw/ipad-1.png',
      title: 'August Gift Voucher',
      discount: 14,
      code: 'AUGUST23',
    },
    {
      img: 'https://i.ibb.co/h9PYFHJ/lip-liner-2.png',
      title: 'Paper On Demand',
      discount: 14,
      code: 'PAPER12',
    },
    {
      img: 'https://i.ibb.co/ThxGY6N/clothing-13.png',
      title: 'SUMMER Vacation',
      discount: 8,
      code: 'SUMMER23',
    },
    {
      img: 'https://i.ibb.co/rvmPWxc/bracelet-5.png',
      title: 'Fifty Fifty',
      discount: 12,
      code: 'FIF50',
    },
  ];
}
