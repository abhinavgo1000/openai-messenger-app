import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

import { UserSignupComponent } from '../user-signup/user-signup.component';
import { TranslateToolbarComponent } from '../translate-toolbar/translate-toolbar.component';

import { DynamicTranslationDirective } from '../../shared/directives/dynamic-translation.directive';

@Component({
  selector: 'app-new-user-page',
  standalone: true,
  imports: [
    MatCardModule,
    TranslateModule,
    UserSignupComponent,
    TranslateToolbarComponent,
    DynamicTranslationDirective
  ],
  templateUrl: './new-user-page.component.html',
  styleUrl: './new-user-page.component.scss'
})
export class NewUserPageComponent {

  constructor(private translate: TranslateService) {}

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
