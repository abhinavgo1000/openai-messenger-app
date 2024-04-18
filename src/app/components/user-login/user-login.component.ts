import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  FormBuilder, 
  FormControl, 
  FormsModule, 
  ReactiveFormsModule,
  Validators,
  FormGroupDirective,
  NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule, FloatLabelType } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';

import { UserLoginService } from '../../shared/services/user-login.service';

import { StrongPasswordRegx } from '../../shared/regex/password-regex';

export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {

  email: string = '';
  password: string = '';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  pwdFormControl = new FormControl('', [Validators.required, Validators.pattern(StrongPasswordRegx)]);

  matcher = new LoginErrorStateMatcher();

  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    floatLabel: this.floatLabelControl,
  });

  positionOptions: TooltipPosition[] = ['below'];
  position = new FormControl(this.positionOptions[0]);

  constructor(
    private _formBuilder: FormBuilder,
    private store: Store,
    private loginService: UserLoginService) {}

  login() {
    this.loginService.login('username', 'password').subscribe({
      next: (data) => {
        console.log('Login successful', data);
        // Navigate to dashboard or home page
      },
      error: (err) => {
        console.log('Login failed', err);
      }
    });
  }

  rememberLogin() {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
}
