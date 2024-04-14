import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sent-msg-container',
  standalone: true,
  imports: [
    MatDividerModule,
    MatListModule
  ],
  templateUrl: './sent-msg-container.component.html',
  styleUrl: './sent-msg-container.component.scss'
})
export class SentMsgContainerComponent {

  @Input() message: string = '';

  constructor() {}

}
