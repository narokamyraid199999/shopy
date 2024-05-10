import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { CategoryComponent } from './components/category/category.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ButtonModule } from 'primeng/button';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { CompairComponent } from './components/compair/compair.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ShopCattegoriesComponent } from './components/shop-cattegories/shop-cattegories.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PathComponent } from '../shared/path/path.component';
import { FilterPipe } from './core/pipes/filter.pipe';

@NgModule({
  declarations: [
    ShopComponent,
    CategoryComponent,
    WishlistComponent,
    CartComponent,
    CompairComponent,
    ShopCattegoriesComponent,
    ProductDetailsComponent,
    FilterPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RadioButtonModule,
    ShopRoutingModule,
    FullCalendarModule,
    ButtonModule,
    BreadcrumbModule,
    InputTextModule,
    FormsModule,
    TableModule,
    PathComponent,
  ],
})
export class ShopModule {}
