import { Component, OnInit, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DialogData } from '../../shared/interfaces/dialog-data.interface';
import { ProfileUpdateComponent } from '../profile-update/profile-update.component';
import { UserUpdateComponent } from '../user-update/user-update.component';

@Component({
  selector: 'app-data-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatFormFieldModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './data-dialog.component.html',
  styleUrl: './data-dialog.component.scss'
})
export class DataDialogComponent implements OnInit {

  @ViewChild('placeToRender', {read: ViewContainerRef}) placeToRender: ViewContainerRef;

  constructor(
    public dialogRef: MatDialogRef<DataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {
    if (this.data.component === 'profile-update') {
      let dialogForm = this.placeToRender.createComponent(ProfileUpdateComponent);
    } else if (this.data.component === 'user-update') {
      let dialogForm = this.placeToRender.createComponent(UserUpdateComponent);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
