import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { ChatboxAreaComponent } from '../chatbox-area/chatbox-area.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    ChatboxAreaComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  pageTitle: string;
  pageSubTitle: string;

  constructor() {
    this.pageTitle = 'Welcome to the GPT Chatbot!';
    this.pageSubTitle = 'Enter your query in the text block below, and get a personalized reply.';
  }
}
