import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TrendProductsComponent } from './components/trend-products/trend-products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { SpeedDialModule } from 'primeng/speeddial';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SalesComponent } from './components/sales/sales.component';
import { DealsOfDayComponent } from './components/deals-of-day/deals-of-day.component';
import { CardModule } from 'primeng/card';
import { OfferComponent } from './components/offer/offer.component';
import { NewArrivelComponent } from './components/new-arrivel/new-arrivel.component';
import { BlogAndPostsComponent } from './components/blog-and-posts/blog-and-posts.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { SubscripeBannerComponent } from './components/subscripe-banner/subscripe-banner.component';
import { SidebarModule } from 'primeng/sidebar';
import { SideBarService } from './core/services/side-bar.service';

@NgModule({
  declarations: [
    HomeComponent,
    HomeSliderComponent,
    CategoriesComponent,
    TrendProductsComponent,
    SalesComponent,
    DealsOfDayComponent,
    OfferComponent,
    NewArrivelComponent,
    BlogAndPostsComponent,
    SocialMediaComponent,
    SubscripeBannerComponent,
  ],
  providers: [MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    RatingModule,
    FormsModule,
    SpeedDialModule,
    ToastModule,
    CardModule,
    SidebarModule,
    ProductCardComponent,
  ],
})
export class HomeModule {}
