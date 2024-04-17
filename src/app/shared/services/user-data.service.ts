import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserData } from '../interfaces/user-data.interface';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private apiUrl = 'http://localhost:5000/users';

  constructor(private http: HttpClient) { }

  getUserData(userId: number): Observable<UserData> {
    return this.http.get<UserData>(`${this.apiUrl}/${userId}`);
  }

  addUser(userData: UserData): Observable<UserData> {
    return this.http.post<UserData>(this.apiUrl, userData);
  }

  updateUserData(userId: number, userData: UserData): Observable<UserData> {
    return this.http.put<UserData>(`${this.apiUrl}/${userId}`, userData);
  }

  patchUserData(userId: number, userData: UserData): Observable<UserData> {
    return this.http.patch<UserData>(`${this.apiUrl}/${userId}`, userData);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
}
