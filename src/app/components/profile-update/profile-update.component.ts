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
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { provideNativeDateAdapter } from '@angular/material/core';

import { ProfileDataService } from '../../shared/services/profile-data.service';

export class UpdateErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-profile-update',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    AsyncPipe,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  templateUrl: './profile-update.component.html',
  styleUrl: './profile-update.component.scss'
})
export class ProfileUpdateComponent implements OnInit {

  profileForm: FormGroup;

  dobControl = new FormControl('', [Validators.required]);
  sexControl = new FormControl('', [Validators.required]);
  addressControl = new FormControl('', [Validators.required]);
  imgSrcControl = new FormControl('');
  imgAltControl = new FormControl('');

  matcher = new UpdateErrorStateMatcher();

  floatLabelControl = new FormControl('auto' as FloatLabelType);

  positionOptions: TooltipPosition[] = ['below'];
  position = new FormControl(this.positionOptions[0]);

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
    private dataService: ProfileDataService
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 80, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
    this.profileForm = this._formBuilder.group({
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

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
}
