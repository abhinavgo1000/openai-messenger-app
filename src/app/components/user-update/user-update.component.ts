import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
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
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';

import { UserDataService } from '../../shared/services/user-data.service';

import { StrongPasswordRegx } from '../../shared/regex/password-regex';

export class UpdateErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.scss'
})
export class UserUpdateComponent implements OnInit {

  updateForm: FormGroup;

  profileNameControl = new FormControl('', [Validators.required]);
  userNameFormControl = new FormControl('', [Validators.required]);
  telephoneFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  pwdFormControl = new FormControl('', [Validators.required, Validators.pattern(StrongPasswordRegx)]);

  matcher = new UpdateErrorStateMatcher();

  floatLabelControl = new FormControl('auto' as FloatLabelType);

  positionOptions: TooltipPosition[] = ['below'];
  position = new FormControl(this.positionOptions[0]);

  hasAcceptedTC = false;

  constructor(
    private _formBuilder: FormBuilder,
    private store: Store,
    private router: Router,
    private dataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.updateForm = this._formBuilder.group({
      profileNameControl: this.profileNameControl,
      userNameFormControl: this.userNameFormControl,
      telephoneFormControl: this.telephoneFormControl,
      emailFormControl: this.emailFormControl,
      pwdFormControl: this.pwdFormControl,
      floatLabel: this.floatLabelControl
    });
  }

  acceptTandC() {
    this.hasAcceptedTC = !(this.hasAcceptedTC);
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
}
