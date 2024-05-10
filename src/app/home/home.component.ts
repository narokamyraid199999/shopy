import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { SideBarService } from './core/services/side-bar.service';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _SideBarService: SideBarService) {}

  ngOnInit(): void {
    this.updateState();
  }

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
    this._SideBarService.isOpend.next(false);
  }

  updateState() {
    this._SideBarService.isOpend.subscribe((data) => {
      if (data) {
        this.sidebarVisible = true;
      } else {
        this.sidebarVisible = false;
      }
    });
  }

  sidebarVisible: boolean = false;
}
