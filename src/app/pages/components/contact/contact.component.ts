import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private _activeRoute: ActivatedRoute) {}

  items: MenuItem[] = [];

  home: MenuItem | undefined;

  paths: string[] = [];

  name: string = '';

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(25),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    terms: new FormControl<string>('', [Validators.required]),
  });

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
