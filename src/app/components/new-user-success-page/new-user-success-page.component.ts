import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

import { TranslateToolbarComponent } from '../translate-toolbar/translate-toolbar.component';

import { DynamicTranslationDirective } from '../../shared/directives/dynamic-translation.directive';

@Component({
  selector: 'app-new-user-success-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    TranslateModule,
    TranslateToolbarComponent,
    DynamicTranslationDirective
  ],
  templateUrl: './new-user-success-page.component.html',
  styleUrl: './new-user-success-page.component.scss'
})
export class NewUserSuccessPageComponent {

  panel1OpenState = false;
  panel2OpenState = false;
  panel3OpenState = false;

  constructor(
    private router: Router,
    private translate: TranslateService) {}

    navigateToLogin() {
      this.router.navigate(['./login']);
    }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
