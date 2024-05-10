import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/profile/components/dashboard/dashboard.component';
import { InformationComponent } from './components/profile/components/information/information.component';
import { AddressComponent } from './components/profile/components/address/address.component';
import { OrdersComponent } from './components/profile/components/orders/orders.component';
import { NotificationComponent } from './components/profile/components/notification/notification.component';
import { PasswordComponent } from './components/profile/components/password/password.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/components/login/login.component';
import { SignupComponent } from './components/auth/components/signup/signup.component';
import { ForgetPasswordComponent } from './components/auth/components/forget-password/forget-password.component';
import { BlogComponent } from './components/blog/blog.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', redirectTo: 'profile/dashboard', pathMatch: 'full' },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'info', component: InformationComponent },
      { path: 'address', component: AddressComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'password', component: PasswordComponent },
    ],
  },
  { path: 'coupons', component: CouponsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'auth', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'forget', component: ForgetPasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
