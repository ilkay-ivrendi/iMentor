import { Routes } from '@angular/router';
import authRoutes from '@core/auth/auth.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClassesComponent } from './pages/classes/classes.component';


export const appRoutes: Routes = [
    ...authRoutes,
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'classes',
        component: ClassesComponent
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];