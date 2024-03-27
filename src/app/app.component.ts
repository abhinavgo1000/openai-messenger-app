import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component'
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HomePageComponent,
    PageHeaderComponent,
    PageFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'openai-messenger-app';
}
