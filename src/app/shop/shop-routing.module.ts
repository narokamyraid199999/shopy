import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { CategoryComponent } from './components/category/category.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { CompairComponent } from './components/compair/compair.component';
import { ShopCattegoriesComponent } from './components/shop-cattegories/shop-cattegories.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shopCategories', component: ShopCattegoriesComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent },
  { path: 'compair', component: CompairComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
