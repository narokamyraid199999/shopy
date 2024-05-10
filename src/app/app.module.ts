import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SideBarService } from './home/core/services/side-bar.service';
import { SidebarModule } from 'primeng/sidebar';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProductCardComponent } from './home/components/product-card/product-card.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BadgeModule } from 'primeng/badge';
import { ScrollTopModule } from 'primeng/scrolltop';
import { PathComponent } from './shared/path/path.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    PageNotFoundComponent,
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    CarouselModule,
    SidebarModule,
    ToastModule,
    ProductCardComponent,
    ScrollPanelModule,
    ScrollTopModule,
    BadgeModule,
    PathComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
