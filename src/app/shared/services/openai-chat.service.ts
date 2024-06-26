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
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type, Accept'
      }
    });
  }

  sendMessage(message: string) {
    this.socket.emit('chat message', message);
  }

  getMessages() {
    return new Observable<string[]>(observer => {
      this.socket.on('chat message', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
  }
}
