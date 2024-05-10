import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  constructor(private _activeRoute: ActivatedRoute) {}

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
