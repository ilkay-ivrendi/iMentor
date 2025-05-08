import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';


export interface User {
  userId: string;
  username: string;
  email: string;
  userRole: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/v1/user';

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {

    if (isPlatformBrowser(this.platformId)) {
      this.loadUserFromStorage();
    }
    
  }

  loadUserFromStorage() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.userSubject.next(JSON.parse(userData));
    } else {
      this.fetchUserFromBackend();
    }
  }

  fetchUserFromBackend() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      this.http.get<User>(`${this.apiUrl}/me`).subscribe({
        next: (user) => {
          this.userSubject.next(user);
          localStorage.setItem('user', JSON.stringify(user));
        },
        error: (err) => {
          console.error("Failed to fetch user", err);
          localStorage.removeItem('user');
        }
      });
    }
  }

  getUser(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "/me");
  }

  setUser(user: User) {
    this.userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserProfile() {
    return this.userSubject.getValue();
  }
}
