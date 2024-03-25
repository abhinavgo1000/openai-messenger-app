import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatFormFieldModule, FloatLabelType } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { OpenaiChatService } from '../../shared/services/openai-chat.service'

@Component({
  selector: 'app-chatbox-area',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule],
  templateUrl: './chatbox-area.component.html',
  styleUrl: './chatbox-area.component.scss'
})
export class ChatboxAreaComponent implements OnInit, OnDestroy {

  messages: any[] = [];
  newMessage: string = '';
  private messageSubscription: Subscription;
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    floatLabel: this.floatLabelControl,
  });

  constructor(
    private chatService: OpenaiChatService,
    private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.messageSubscription = this.chatService.getMessages().subscribe({
      next: (data: any) => this.messages = data,
      error: (err: any) => console.error(err) // Handle errors appropriately in real app
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage).subscribe({
      next: (response) => {
        // Optionally handle response
        this.newMessage = ''; // Reset the input field
        this.loadMessages();  // Reload messages to include the new one
      },
      error: (err: any) => console.error(err) // Handle errors appropriately in real app
    });
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }
}
