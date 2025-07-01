import { Component } from '@angular/core';
import { AuthService } from './auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  template: `
    <div class="register-background">
      <form class="auth-form" (ngSubmit)="onRegister()">
        <h2>Register</h2>
        <label for="username">Username</label>
        <input id="username" [(ngModel)]="username" name="username" required/>

        <label for="firstname">First Name</label>
        <input id="firstname" [(ngModel)]="firstname" name="firstname" required/>

        <label for="lastname">Last Name</label>
        <input id="lastname" [(ngModel)]="lastname" name="lastname" required/>

        <label for="email">Email</label>
        <input id="email" [(ngModel)]="email" name="email" required/>

        <label for="password">Password</label>
        <input id="password" [(ngModel)]="password" name="password" type="password" required/>

        <label for="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" [(ngModel)]="confirmPassword" name="confirmPassword" type="password" required/>

        @if (errorMessage) {
          <div class="error">{{ errorMessage }}</div>
        }
        <button type="submit">Register</button>
      </form>
    </div>
  `,
  styleUrls: ['../static/css/register.component.css']
})
export class RegisterComponent {
  username = '';
  firstname = '';
  lastname = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';

  constructor(private auth: AuthService) {}

  onRegister() {
    this.auth.register({
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }).subscribe({
      next: res => {
        console.log('Register succesfull', res);
        this.auth.notifyAuthChanged(true);
        this.errorMessage = '';
      },
      error: err => {
        this.errorMessage = err.error?.message || 'Unexpected error occurred';
      }
    });
  }
}
