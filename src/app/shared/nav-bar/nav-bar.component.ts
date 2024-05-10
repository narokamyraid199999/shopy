import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SideBarService } from 'src/app/home/core/services/side-bar.service';
import { ProductService } from '../core/services/product.service';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private _Router: Router,
    private _sideBar: SideBarService,
    private _productService: ProductService,
    private _cartService: CartService
  ) {}

  items: MenuItem[] | undefined;

  padge: number = 2;

  getProductsNumber() {
    this._cartService.foodList.subscribe((data) => {
      this.padge = data.length;
    });
  }

  ngOnInit() {
    this.getProductsNumber();
    this.items = [
      {
        items: [
          {
            label: 'Headphones',
            // icon: 'pi pi-refresh',
            command: () => this.navigate('/shop/category', 'headphones'),
          },
          {
            label: 'Mobile Tablet',
            // icon: 'pi pi-upload',
            command: () => this.navigate('/shop/category', 'Mobile'),
          },
          {
            label: 'Cpu Heat Pipes',
            // icon: 'pi pi-upload',
            command: () => this.navigate('/shop/category', 'cpu'),
          },
          {
            label: 'Smart Watches',
            // icon: 'pi pi-upload',
            command: () => this.navigate('/shop/category', 'watches'),
          },
          {
            label: 'Bluetooth',
            // icon: 'pi pi-upload',
            command: () => this.navigate('/shop/category', 'bluetooth'),
          },
        ],
      },
    ];
  }

  navigate(path: string, data: string) {
    this._Router.navigate([path, data]);
  }

  openSideBar() {
    this._sideBar.isOpend.next(true);
  }
}
