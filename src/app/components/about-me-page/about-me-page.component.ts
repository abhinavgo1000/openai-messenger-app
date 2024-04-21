import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

import { TranslateToolbarComponent } from '../translate-toolbar/translate-toolbar.component';

import { DynamicTranslationDirective } from '../../shared/directives/dynamic-translation.directive';

@Component({
  selector: 'app-about-me-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatExpansionModule,
    TranslateModule,
    TranslateToolbarComponent,
    DynamicTranslationDirective
  ],
  templateUrl: './about-me-page.component.html',
  styleUrl: './about-me-page.component.scss'
})
export class AboutMePageComponent {

  panel1OpenState = false;
  panel2OpenState = false;

  constructor(private translate: TranslateService) {}

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
