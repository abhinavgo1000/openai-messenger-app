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
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule, FloatLabelType } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';

export class SignupErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-new-profile-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './new-profile-form.component.html',
  styleUrl: './new-profile-form.component.scss'
})
export class NewProfileFormComponent implements OnInit {

  newProfileForm: FormGroup;

  dobControl = new FormControl('', [Validators.required]);
  sexControl = new FormControl('', [Validators.required]);
  addressControl = new FormControl('', [Validators.required]);
  imgSrcControl = new FormControl('');
  imgAltControl = new FormControl('');

  matcher = new SignupErrorStateMatcher();

  floatLabelControl = new FormControl('auto' as FloatLabelType);

  positionOptions: TooltipPosition[] = ['below'];
  position = new FormControl(this.positionOptions[0]);

  constructor(
    private _formBuilder: FormBuilder,
    private store: Store,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
      
  }
}
