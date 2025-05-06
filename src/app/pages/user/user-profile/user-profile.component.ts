import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@core/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  userPosts = [
    {
      title: 'Had a great day at the beach!',
      date: 'May 1, 2025',
      content: 'Enjoyed the sunshine, waves, and some quality time with friends. 🌞🌊 #BeachDay'
    },
    {
      title: 'Just finished a new project 🚀',
      date: 'April 27, 2025',
      content: 'Excited to share that my new Angular app is live! Built with love and caffeine. ☕'
    },
    {
      title: 'Learning Three.js',
      date: 'April 20, 2025',
      content: '3D on the web is so cool! Just rendered my first rotating cube. 🧊'
    }
  ];
  

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
