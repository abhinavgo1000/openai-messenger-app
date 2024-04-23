import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

import { NewProfileFormComponent } from '../new-profile-form/new-profile-form.component';
import { TranslateToolbarComponent } from '../translate-toolbar/translate-toolbar.component';

import { DynamicTranslationDirective } from '../../shared/directives/dynamic-translation.directive';

@Component({
  selector: 'app-new-profile-page',
  standalone: true,
  imports: [
    MatCardModule,
    TranslateModule,
    NewProfileFormComponent,
    TranslateToolbarComponent,
    DynamicTranslationDirective
  ],
  templateUrl: './new-profile-page.component.html',
  styleUrl: './new-profile-page.component.scss'
})
export class NewProfilePageComponent {

  constructor(private translate: TranslateService) {}

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
