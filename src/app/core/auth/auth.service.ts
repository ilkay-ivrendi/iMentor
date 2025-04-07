import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authTokenKey = "auth_token";
  private readonly userRoleKey = "user_role";

  constructor(private router: Router) { }

  // Check if the user is Logged in
  get isLoggedIn(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

  // Get the user's role (either 'student' or 'teacher')
  get userRole(): 'student' | 'teacher' | null {
    const role = localStorage.getItem(this.userRoleKey);
    return role === 'student' || role === 'teacher' ? role : null;
  }

  // Login method (for demonstration purposes)
  login(token: string, role: 'student' | 'teacher'): void {
    localStorage.setItem(this.authTokenKey, token);
    localStorage.setItem(this.userRoleKey, role);
    this.router.navigate([this.getRedirectUrl(role)]);
  }

  // Logout method
  logout(): void {
    localStorage.removeItem(this.authTokenKey);
    localStorage.removeItem(this.userRoleKey);
    this.router.navigate(['/auth/login']);
  }

  // Redirect based on user role
  private getRedirectUrl(role: 'student' | 'teacher'): string {
    return role === 'student' ? '/dashboard' : '/teacher-dashboard';
  }
}

