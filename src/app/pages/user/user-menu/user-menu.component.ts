import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';
import { User, UserService } from '@core/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-menu',
  imports: [AsyncPipe, MatButtonModule, MatMenuModule, MatIconModule, RouterModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss'
})
export class UserMenuComponent {

  user$: Observable<User | null>;

  constructor(private authService: AuthService, private userService: UserService) {
    this.user$ = this.userService.user$;
  }

  logout() {
    this.authService.logout();
  }
}
