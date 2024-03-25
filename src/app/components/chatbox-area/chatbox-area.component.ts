import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { OpenaiChatService } from '../../shared/services/openai-chat.service'

@Component({
  selector: 'app-chatbox-area',
  standalone: true,
  imports: [],
  templateUrl: './chatbox-area.component.html',
  styleUrl: './chatbox-area.component.scss'
})
export class ChatboxAreaComponent implements OnInit, OnDestroy {

  messages: any[] = [];
  newMessage: string = '';
  private messageSubscription: Subscription;

  constructor(private chatService: OpenaiChatService) {}

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

  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }
}
