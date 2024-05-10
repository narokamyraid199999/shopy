import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent {
  gender: City[] = [
    { name: 'Mail', code: 'ml' },
    { name: 'Fmail', code: 'fl' },
    { name: 'Others', code: 'oth' },
  ];

  infoForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    facebook: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    twitter: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    gender: new FormControl<City | null>(null),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(11),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(11),
    ]),
    bio: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200),
    ]),
  });
}
