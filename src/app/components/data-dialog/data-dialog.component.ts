import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentPortal } from '@angular/cdk/portal';
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

  portal: ComponentPortal<any>;

  constructor(
    public dialogRef: MatDialogRef<DataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {
      
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
