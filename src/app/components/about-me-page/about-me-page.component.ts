import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-about-me-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatExpansionModule
  ],
  templateUrl: './about-me-page.component.html',
  styleUrl: './about-me-page.component.scss'
})
export class AboutMePageComponent {
  panelOpenState = false;

  constructor() {}
}
