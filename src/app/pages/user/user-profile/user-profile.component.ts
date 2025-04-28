import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '@core/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
