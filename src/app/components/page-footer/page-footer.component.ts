import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-footer',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './page-footer.component.html',
  styleUrl: './page-footer.component.scss'
})
export class PageFooterComponent {

  constructor(
    private router: Router
  ) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToMessenger() {
    this.router.navigate(['/messenger']);
  }

  navigateToAbout() {
    this.router.navigate(['/about-me']);
  }
}
