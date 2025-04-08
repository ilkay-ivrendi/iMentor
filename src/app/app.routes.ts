import { Routes } from '@angular/router';
import authRoutes from '@core/auth/auth.routes';
import { ShellComponent } from '@shell/shell.component';
import { authGuard } from '@core/auth/auth.guard';


export const appRoutes: Routes = [
    // authRoutes are public routes
    ...authRoutes,

    {
        path: '',
        component: ShellComponent,
        canActivate: [authGuard],
        loadChildren: () => import('./shell/shell.routes').then(m => m.default),
    },

    // Fallback
    {
        path: '**',
        redirectTo: 'login',
    },
];