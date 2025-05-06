import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';

@Component({
  selector: 'app-user-menu',
  imports: [MatButtonModule, MatMenuModule, MatIconModule, RouterModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss'
})
export class UserMenuComponent {
  user = {
    username: "kai"
  }

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
