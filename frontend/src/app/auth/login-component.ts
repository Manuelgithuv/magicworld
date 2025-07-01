import { Component } from '@angular/core';
import { AuthService } from './auth-service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  template: `
    <div class="login-background">
      <form class="auth-form" (ngSubmit)="onLogin()">
       <h2>Login</h2>
       <label for="username">Username</label>
       <input id="username" [(ngModel)]="username" name="username" required />

       <label for="password">Password</label>
       <input id="password" [(ngModel)]="password" name="password" type="password" required />
       @if (errorMessage) {
         <div class="error">{{ errorMessage }}</div>
       }
       <button type="submit">Login</button>
    </form>
  </div>
  `,
  styleUrls: ['../static/css/login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  constructor(private auth: AuthService) {}

  onLogin() {
    this.auth.login({ username: this.username, password: this.password }).subscribe({
      next: res => {
        console.log('Login successful', res);
        this.auth.notifyAuthChanged(true);
        this.errorMessage = '';
      },
      error: err => {
        this.errorMessage = err.error?.message || 'Unexpected error occurred';
      }
    });
  }
}
