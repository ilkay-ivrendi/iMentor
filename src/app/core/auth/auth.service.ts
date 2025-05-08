import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformService } from '@core/services/platform.service';
import { UserService } from '@core/services/user.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authTokenKey = "auth_token";
  private readonly userRoleKey = "user_role";

  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private router: Router, private http: HttpClient, private platform: PlatformService, private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.platform.isBrowser && !!localStorage.getItem(this.authTokenKey);
  }

  get userRole(): 'USER' | 'STUDENT' | 'TEACHER' | null {
    const role = localStorage.getItem(this.userRoleKey);
    return role === 'USER' || role === 'STUDENT' || role === 'TEACHER' ? role : null;
  }
  // Call backend API to register user
  register(userData: any): Observable<any> {
    console.log("Register request sent", `${this.apiUrl}/register`, userData);
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // Call backend API to login
  login(credentials: any): Observable<any> {
    console.log("AuthService", credentials);
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          if (response && response.token) {
            localStorage.setItem(this.authTokenKey, response.token);
            this.userService.setUser(response);

            const role = response.role || 'USER';
            this.router.navigate([this.getRedirectUrl(role)]);
          }
        })
      );
  }

  // Logout method
  logout(): void {
    localStorage.removeItem(this.authTokenKey);
    localStorage.removeItem(this.userRoleKey);
    this.router.navigate(['/auth/login']);
  }

  // Redirect based on user role
  private getRedirectUrl(role: 'USER' | 'STUDENT'): string {
    return role === 'USER' ? '/dashboard' : '/teacher-dashboard';
  }
}

