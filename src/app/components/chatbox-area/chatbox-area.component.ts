import { 
  Component, 
  OnInit, 
  OnDestroy, 
  AfterViewInit,
  ElementRef,
  Input,
  Renderer2,
  ViewChild } from '@angular/core';
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
export class ChatboxAreaComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('textElement') textElement: ElementRef;
  @ViewChild('blinkElement') blinkElement: ElementRef;

  @Input() messages: string[] = [];
  @Input() textColor: 'black';
  @Input() fontSize: '20px';
  @Input() blinkWidth = '2px';
  @Input() typingSpeedMilliseconds = 300;

  newMessage: string = '';
  private messageSubscription: Subscription;
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    floatLabel: this.floatLabelControl,
  });

  private i = 0;

  constructor(
    private chatService: OpenaiChatService,
    private _formBuilder: FormBuilder,
    private renderer: Renderer2) {}

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

  ngAfterViewInit(): void {
    this.initVariables();
    this.typingEffect();
  }

  private initVariables(): void {
    this.renderer.setStyle(
      this.textElement.nativeElement,
      'color',
      this.textColor
    );
    this.renderer.setStyle(
      this.textElement.nativeElement,
      'font-size',
      this.fontSize
    );
    this.renderer.setStyle(this.textElement.nativeElement, 'padding', '0.1em');

    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      'border-right-width',
      this.blinkWidth
    );
    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      'border-right-color',
      this.textColor
    );
    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      'font-size',
      this.fontSize
    );
  }

  private typingEffect(): void {
    const word = this.messages[this.i].split('');
    const loopTyping = () => {
      if (word.length > 0) {
        this.textElement.nativeElement.innerHTML += word.shift();
      } else {
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
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
