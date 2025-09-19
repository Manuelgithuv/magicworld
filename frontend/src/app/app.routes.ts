import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import {AuthGuard} from './auth/AuthGuard';
import {HomeComponent} from './home/home';
import {EmailForm} from './auth/password_reset/email-form/email-form';
import {ResetPasswordForm} from './auth/password_reset/reset-password-form/reset-password-form';

export const routes: Routes = [
  { path: 'login',
    component: Login,
    canActivate: [AuthGuard]},
  { path: 'register',
    component: Register,
    canActivate: [AuthGuard] },
  {
    path:'forgot-password',
    component: EmailForm,
    canActivate: [AuthGuard]
  },
  {
    path: 'reset-password',
    component: ResetPasswordForm,
    canActivate: [AuthGuard]
  },
  { path:'',
    component: HomeComponent
  }
];
