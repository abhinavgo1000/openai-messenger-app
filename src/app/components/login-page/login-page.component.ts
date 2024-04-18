import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

import { UserLoginComponent } from '../user-login/user-login.component';
import { TranslateToolbarComponent } from '../translate-toolbar/translate-toolbar.component';

import { DynamicTranslationDirective } from '../../shared/directives/dynamic-translation.directive';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatCardModule,
    TranslateModule,
    UserLoginComponent,
    TranslateToolbarComponent,
    DynamicTranslationDirective
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(private translate: TranslateService) {}

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
