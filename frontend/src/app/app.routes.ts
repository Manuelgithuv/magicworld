import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login-component';
import { RegisterComponent } from './auth/register-component';
import {AuthGuard} from './auth/AuthGuard';

export const routes: Routes = [
  { path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]},
  { path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard] }
];
