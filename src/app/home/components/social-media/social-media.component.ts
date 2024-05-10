import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css'],
})
export class SocialMediaComponent {
  imgs: string[] = [
    'https://shofy-angular.vercel.app/assets/img/instagram/instagram-3.jpg',
    'https://shofy-angular.vercel.app/assets/img/instagram/instagram-4.jpg',
    'https://shofy-angular.vercel.app/assets/img/instagram/instagram-5.jpg',
    'https://shofy-angular.vercel.app/assets/img/instagram/instagram-1.jpg',
    'https://shofy-angular.vercel.app/assets/img/instagram/instagram-2.jpg',
  ];
}
