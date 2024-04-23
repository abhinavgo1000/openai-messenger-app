import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProfileData } from '../interfaces/profile-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  private apiUrl = 'http://localhost:5000/profiles';

  constructor(private http: HttpClient) { }

  getProfileData(profileId: number): Observable<ProfileData> {
    return this.http.get<ProfileData>(`${this.apiUrl}/${profileId}`);
  }

  addProfile(profileData: ProfileData): Observable<ProfileData> {
    return this.http.post<ProfileData>(this.apiUrl, profileData);
  }

  updateProfileData(profileId: number, profileData: ProfileData): Observable<ProfileData> {
    return this.http.put<ProfileData>(`${this.apiUrl}/${profileId}`, profileData);
  }

  patchProfileData(profileId: number, profileData: ProfileData): Observable<ProfileData> {
    return this.http.patch<ProfileData>(`${this.apiUrl}/${profileId}`, profileData);
  }

  deleteProfile(profileId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${profileId}`);
  }
}
