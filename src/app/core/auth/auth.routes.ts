import { Routes } from '@angular/router';
import { LoginComponent } from '@auth/login/login.component';
import { RegisterComponent } from '@auth/register/register.component';
import { ForgotPasswordComponent } from '@auth/forgot-password/forgot-password.component';

export default [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent }
] as Routes;