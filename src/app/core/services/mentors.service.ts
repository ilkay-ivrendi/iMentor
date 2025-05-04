import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


export interface Mentor {
  id: string;
  name: string;
  branch: string;
  description: string;
  mentorAvatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class MentorsService {
  private apiUrl = 'http://localhost:8080/api/v1/mentors';

  private mentorSubject = new BehaviorSubject<Mentor | null>(null);
  mentor$ = this.mentorSubject.asObservable();

  constructor(private http: HttpClient) { }

  getMentors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Add model later
  }

  setMentor(mentor: Mentor) {
    this.mentorSubject.next(mentor);
  }

  getMentor() {
    return this.mentorSubject.getValue();
  }
}
