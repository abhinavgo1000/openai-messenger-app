import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslateService } from '@ngx-translate/core';

import { ChatboxAreaComponent } from '../chatbox-area/chatbox-area.component';
import { TranslateToolbarComponent } from '../translate-toolbar/translate-toolbar.component';

import { DynamicTranslationDirective } from '../../shared/directives/dynamic-translation.directive'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    ChatboxAreaComponent,
    TranslateToolbarComponent,
    DynamicTranslationDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  pageTitle: string;
  pageSubtitle: string;

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
