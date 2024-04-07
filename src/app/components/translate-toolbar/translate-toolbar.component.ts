import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-translate-toolbar',
  standalone: true,
  imports: [
    MatButtonToggleModule
  ],
  templateUrl: './translate-toolbar.component.html',
  styleUrl: './translate-toolbar.component.scss'
})
export class TranslateToolbarComponent implements OnInit {

  @Output() enClick = new EventEmitter();
  @Output() esClick = new EventEmitter();

  public selectedLang: string;

  constructor() {}

  ngOnInit(): void {
      this.selectedLang = 'en';
  }
}
