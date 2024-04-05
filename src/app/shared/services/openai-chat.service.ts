import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiChatService {

  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:5000/messages', {
      withCredentials: true,
      extraHeaders: {
        'message-header': 'abcd'
      }
    });
  }

  sendMessage(message: string) {
    this.socket.emit('new-message', message);
  }

  getMessages() {
    return new Observable<string[]>(observer => {
      this.socket.on('new-message', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
  }
}
