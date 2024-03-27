import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-page-footer',
  standalone: true,
  imports: [
    MatToolbarModule],
  templateUrl: './page-footer.component.html',
  styleUrl: './page-footer.component.scss'
})
export class PageFooterComponent {

  constructor() {}

}
