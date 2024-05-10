import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  title: string = 'gamer';

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  signUpForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    terms: new FormControl('', [Validators.required]),
    conPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
  });
}
