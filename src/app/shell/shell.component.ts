import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserMenuComponent } from "../pages/user/user-menu/user-menu.component";
import { User, UserService } from '@core/services/user.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  imports: [
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    FlexLayoutModule,
    UserMenuComponent
]
})
export class ShellComponent {
  private breakpointObserver = inject(BreakpointObserver);

  user$: Observable<User | null>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(private userService: UserService) {
      this.user$ = this.userService.user$
    }

    ngOnInit() {

    }
}
