import { AuthService, AuthResponseData } from './../servcies/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[@#$%^&+=]).*$'),
        ]),
        confirmPassword: new FormControl(null, [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[@#$%^&+=]).*$'),
          this.matchPassword.bind(this),
        ]),
        dob: new FormControl(null, [
          Validators.required,
          this.goodDate.bind(this),
        ]),
      }),
    });
  }

  matchPassword(control: FormControl) {
    if (
      this.signupForm !== undefined &&
      control.value === this.signupForm.value.userData.password
    ) {
      return null;
    }
    return {
      valid: false,
    };
  }

  goodDate(control: FormControl) {
    var today = new Date();
    if (new Date(control.value) < today) {
      return null;
    }
    return {
      valid: false,
    };
  }

  // onSubmit() {
  //   console.log(this.signupForm);
  // }

  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }
    const email = this.signupForm.value.userData.email;
    const password = this.signupForm.value.userData.password;
    const dob = this.signupForm.value.userData.dob;
    const name = this.signupForm.value.userData.name;

    let authObs: Observable<AuthResponseData>;

    authObs = this.authService.signup(email, password, dob, name);

    authObs.subscribe(
      (resData: any) => {
        console.log(resData);
        // this.router.navigate(['/recipes']);
      },
      (errorMessage: any) => {
        console.log(errorMessage);
      }
    );
  }
}
