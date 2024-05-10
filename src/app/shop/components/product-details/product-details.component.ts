import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {
  productDescription,
  productDetails,
} from 'src/app/shared/core/interfaces/product-details';
import { CartService } from 'src/app/shared/core/services/cart.service';
import { ProductService } from 'src/app/shared/core/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private _productService: ProductService,
    private _ActivateRouter: ActivatedRoute,
    private _cartService: CartService,
    private _messageService: MessageService,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    this._ActivateRouter.paramMap.subscribe((id) => {
      this.id = parseInt(`${id.get('id')}`);
      console.log(this.id);
      this._productService.getAllProducts().subscribe((data) => {
        [this.product] = data.filter((prod) => prod.id === this.id);
        this.product ? (this.mainImg = this.product.img[0]) : undefined;
        this.product
          ? (this.descLen = this.product.description.length)
          : undefined;

        console.log(this.product);
      });
    });
  }

  shourClicked: boolean = false;

  id: number | undefined;
  product: productDescription | undefined;

  mainImg: string | undefined;
  descLen: number = 0;

  shourDesc: number = 18;

  changeMainImage(img: string) {
    this.shourClicked = true;
    this.mainImg = img;
  }

  seeMore() {
    this.shourClicked = true;
    this.shourDesc = this.descLen;
  }
  seeLess() {
    this.shourClicked = false;
    this.shourDesc = 18;
  }

  butNow() {
    this.addToCart();
    setTimeout(() => {
      this._Router.navigate(['/pages/checkout']);
    }, 500);
  }

  addToCart() {
    this._cartService.updateLocalStorage(this.product);
    this._messageService.add({
      severity: 'success',
      detail: `${this.product?.title} Added to cart`,
    });
  }
}
