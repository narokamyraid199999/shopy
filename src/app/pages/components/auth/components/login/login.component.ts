import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title: string = 'tamer';
  gamer: string = 'gamer';
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  passwordForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    terms: new FormControl('', [Validators.required]),
  });
}
