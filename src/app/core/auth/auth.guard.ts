import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // If the user is logged in, allow access to the route
  if (authService.isLoggedIn) {
    return true;
  }

  // Redirect to the login page if not logged in
  router.navigate(['/login']);
  return false;
};
