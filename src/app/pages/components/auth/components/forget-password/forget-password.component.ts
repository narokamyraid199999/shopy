import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  forgetForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
  });
}
