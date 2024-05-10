import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from '../auth/components/login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  @ViewChild(LoginComponent, { static: true }) dashTitle?: LoginComponent;

  ngAfterViewInit(): void {
    console.log('my dashboard', this.dashTitle);
  }
}
