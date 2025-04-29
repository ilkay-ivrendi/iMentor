import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorsService {
  private apiUrl = 'http://localhost:8080/api/v1/mentors';

  constructor(private http: HttpClient) {}

  getMentors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Add model later
  }
}
