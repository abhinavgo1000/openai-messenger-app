import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  FormBuilder,
  FormGroup, 
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

import { UserDataService } from '../../shared/services/user-data.service';

import { StrongPasswordRegx } from '../../shared/regex/password-regex';

export class SignupErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-signup',
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
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.scss'
})
export class UserSignupComponent implements OnInit {

  signupForm: FormGroup;

  profileNameControl = new FormControl('', [Validators.required]);
  userNameFormControl = new FormControl('', [Validators.required]);
  telephoneFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  pwdFormControl = new FormControl('', [Validators.required, Validators.pattern(StrongPasswordRegx)]);

  matcher = new SignupErrorStateMatcher();

  floatLabelControl = new FormControl('auto' as FloatLabelType);

  positionOptions: TooltipPosition[] = ['below'];
  position = new FormControl(this.positionOptions[0]);

  constructor(
    private _formBuilder: FormBuilder,
    private store: Store,
    private dataService: UserDataService) {}

  ngOnInit(): void {
    this.signupForm = this._formBuilder.group({
      profileNameControl: this.profileNameControl,
      userNameFormControl: this.userNameFormControl,
      telephoneFormControl: this.telephoneFormControl,
      emailFormControl: this.emailFormControl,
      pwdFormControl: this.pwdFormControl,
      floatLabel: this.floatLabelControl
    });
  }

  signup() {
    if (this.signupForm.valid) {
      this.dataService.addUser(this.signupForm.value).subscribe({
        next: (user) => {
          console.log('User created:', user);
          // Optionally redirect or clear form
          this.signupForm.reset();
          // Redirect logic or success message
        },
        error: (error) => {
          console.error('Error creating user:', error);
          // Handle errors, such as displaying a notification
        }
      });
    }
  }

  acceptTandC() {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
}
