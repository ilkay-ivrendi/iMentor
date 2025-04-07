import { Routes } from '@angular/router';
import authRoutes from '@core/auth/auth.routes';


export const appRoutes: Routes = [
    ...authRoutes,
    {
        path: '**',
        redirectTo: 'login'
    }
];