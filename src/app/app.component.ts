import { Component, OnInit, ViewChild } from '@angular/core';
import { SideBarService } from './home/core/services/side-bar.service';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private _SideBarService: SideBarService) {}

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }

  ngOnInit(): void {
    this.updateSideNav();
  }

  updateSideNav() {
    this._SideBarService.isOpend.subscribe((data) => {
      if (data) {
        this.sidebarVisible = true;
      } else {
        this.sidebarVisible = false;
      }
    });
  }

  title = 'shopy';
  sidebarVisible: boolean = true;
}
