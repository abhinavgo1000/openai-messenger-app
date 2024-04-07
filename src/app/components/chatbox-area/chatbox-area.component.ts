import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';
import { MatFormFieldModule, FloatLabelType } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';

import { CapitalizeFirstPipe } from '../../shared/pipes/capitalize-first.pipe';
import { DynamicTranslationDirective } from '../../shared/directives/dynamic-translation.directive';

import * as ChatActions from '../../store/chat/chat.actions';
import { selectAllMessages } from '../../store/chat/chat.selector';

@Component({
  selector: 'app-chatbox-area',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LetDirective,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatTooltipModule,
    CapitalizeFirstPipe,
    DynamicTranslationDirective],
  templateUrl: './chatbox-area.component.html',
  styleUrl: './chatbox-area.component.scss'
})
export class ChatboxAreaComponent implements OnInit {

  newMessage: string = '';
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    floatLabel: this.floatLabelControl,
  });
  positionOptions: TooltipPosition[] = ['below'];
  position = new FormControl(this.positionOptions[0]);

  isTyping = false;

  messages$ = this.store.select(selectAllMessages);

  constructor(
    private store: Store,
    private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.store.dispatch(ChatActions.loadMessages());
    this.messages$.subscribe(messages => {
      messages.forEach(() => {
        this.isTyping = true;
        setTimeout(() => this.isTyping = false, 3000); // 3 seconds
      });
    });
  }

  sendMessage() {
    this.store.dispatch(ChatActions.sendMessage({ message: this.newMessage }));
    this.displaySentMessage(this.newMessage);
    this.newMessage = '';
  }

  private displaySentMessage(message: string) {
    let messages = document.getElementById('messages');
    let item = document.createElement('li');
    item.textContent = message;
    messages?.appendChild(item);
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
}
