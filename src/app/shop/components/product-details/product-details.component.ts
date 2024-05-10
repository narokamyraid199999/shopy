import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productDescription } from 'src/app/shared/core/interfaces/product-details';
import { ProductService } from 'src/app/shared/core/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private _productService: ProductService,
    private _ActivateRouter: ActivatedRoute
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
        console.log(this.product);
      });
    });
  }

  id: number | undefined;
  product: productDescription | undefined;

  mainImg: string | undefined;

  changeMainImage(img: string) {
    this.mainImg = img;
  }
}
