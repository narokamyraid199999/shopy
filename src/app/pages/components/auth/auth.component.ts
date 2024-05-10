import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private _activeRoute: ActivatedRoute) {}

  items: MenuItem[] = [];

  home: MenuItem | undefined;

  paths: string[] = [];

  ngOnInit() {
    window.scrollTo(0, 0);
    this._activeRoute.parent?.url.subscribe((data) => {
      console.log('parent ', data[0].path);
      this.paths?.push(data[0].path);
      this._activeRoute.url.subscribe((data) => {
        this.paths?.push(data[0].path);
      });
    });
    this.items = [{ icon: 'pi pi-home', routerLink: '/home' }];
    this.paths.forEach((path) => {
      this.items.push({ label: path });
    });
  }
}
