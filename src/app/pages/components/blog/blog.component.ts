import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
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

  constructor(private _activeRoute: ActivatedRoute) {}

  items: MenuItem[] = [];

  home: MenuItem | undefined;

  paths: string[] = [];

  search: string = '';

  categories = [
    { title: 'Farming', num: 12 },
    { title: 'Crisp Bread & Cake', num: 6 },
    { title: 'Milk & Meat', num: 2 },
    { title: 'Organic Fruits', num: 8 },
    { title: 'Sea Foods', num: 0 },
    { title: 'Vegetable', num: 3 },
  ];
}
