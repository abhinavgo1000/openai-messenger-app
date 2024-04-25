import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
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
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule, FloatLabelType } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';

import { ProfileDataService } from '../../shared/services/profile-data.service';

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
    AsyncPipe,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatAutocompleteModule,
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

  hasAcceptedPP = false;

  minDate: Date;
  maxDate: Date;

  genders: string[] = [
    'Male',
    'Female',
    'Other',
    'Prefer not to say'
  ];

  addressOptions: string[] = [
    '2000 Walnut Ave Fremont CA 94538', 
    '8153 Running Fox Rd Columbus OH 43235', 
    '1001 7th Ave New York NY 10011'
  ];

  filteredOptions: Observable<string[]>;

  constructor(
    private _formBuilder: FormBuilder,
    private store: Store,
    private router: Router,
    private _snackBar: MatSnackBar,
    private dataService: ProfileDataService
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 80, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
    this.newProfileForm = this._formBuilder.group({
      dobControl: this.dobControl,
      sexControl: this.sexControl,
      addressControl: this.addressControl,
      imgSrcControl: this.imgSrcControl,
      imgAltControl: this.imgAltControl,
      floatLabel: this.floatLabelControl
    });
    this.filteredOptions = this.addressControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.addressOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  createProfile() {
    if (this.newProfileForm.valid) {
      this.dataService.addProfile(this.newProfileForm.value).subscribe({
        next: (user) => {
          console.log('User created:', user);
          this.newProfileForm.reset();
          this.router.navigate(['/new-user-success']);
        },
        error: (error) => {
          console.error('Error creating profile:', error);
          // Handle errors, such as displaying a notification
        }
      });
    }
  }

  acceptPP() {
    this.hasAcceptedPP = !(this.hasAcceptedPP);
    if (this.hasAcceptedPP) {
      this.openSnackBar('The form can now be submitted', 'Close');
    }
  }

  cancelSignup() {
    this.router.navigate(['/login']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
}
