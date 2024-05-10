import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CouponsComponent } from './components/coupons/coupons.component';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/profile/components/dashboard/dashboard.component';
import { InformationComponent } from './components/profile/components/information/information.component';
import { AddressComponent } from './components/profile/components/address/address.component';
import { OrdersComponent } from './components/profile/components/orders/orders.component';
import { NotificationComponent } from './components/profile/components/notification/notification.component';
import { PasswordComponent } from './components/profile/components/password/password.component';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/components/login/login.component';
import { SignupComponent } from './components/auth/components/signup/signup.component';
import { ForgetPasswordComponent } from './components/auth/components/forget-password/forget-password.component';
import { BlogComponent } from './components/blog/blog.component';
import { MessageService } from 'primeng/api';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PathComponent } from '../shared/path/path.component';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    PagesComponent,
    CouponsComponent,
    ContactComponent,
    ProfileComponent,
    DashboardComponent,
    InformationComponent,
    AddressComponent,
    OrdersComponent,
    NotificationComponent,
    PasswordComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    BlogComponent,
    CheckoutComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MessageService],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BreadcrumbModule,
    RouterModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    BadgeModule,
    DropdownModule,
    InputSwitchModule,
    InputTextareaModule,
    PathComponent,
    InputSwitchModule,
    RadioButtonModule,
  ],
})
export class PagesModule {}
