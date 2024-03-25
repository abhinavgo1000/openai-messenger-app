import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiChatService {

  private apiUrl = 'https://your-api-endpoint.com/messages'; // TODO: replace with the API endpoint from NodeJS API

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<any> {
    return this.http.post(this.apiUrl, { message });
  }

  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
