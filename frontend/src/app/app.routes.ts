import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login-component';
import { RegisterComponent } from './auth/register-component';
import {AuthGuard} from './auth/AuthGuard';
import {HomeComponent} from './home/home';

export const routes: Routes = [
  { path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]},
  { path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard] },
  { path:'',
    component: HomeComponent

  }
];
