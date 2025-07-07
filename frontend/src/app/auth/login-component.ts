import { Component } from '@angular/core';
import { AuthService } from './auth-service';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ErrorService } from '../error/error-service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    TranslateModule
  ],
  template: `
    <div class="login-background">
      <form class="auth-form" (ngSubmit)="onLogin()">
        @if (errorMessages.length > 0) {
          <div class="error">
            @for (msg of errorMessages; track $index) {
              {{ msg }}<br />
            }
          </div>
        }
        @else if (errorCode) {
          <div class="error">{{ errorCode | translate:errorArgs }}</div>
        }
        <h2>{{ 'LOGIN.TITLE' | translate }}</h2>
        <label for="username">{{ 'LOGIN.USERNAME' | translate }}</label>
        <input id="username" [(ngModel)]="username" name="username" required />

        <label for="password">{{ 'LOGIN.PASSWORD' | translate }}</label>
        <div class="password-container">
          <input
            id="password"
            [(ngModel)]="password"
            name="password"
            [type]="showPassword ? 'text' : 'password'"
            required
          />
          <button
            type="button"
            class="toggle-password"
            (click)="togglePasswordVisibility()"
            tabindex="-1"
            aria-label="Mostrar/Ocultar contraseña"
          >
            {{ showPassword ? '👁️' : '🙈' }}
          </button>
        </div>

        <button type="submit">{{ 'LOGIN.BUTTON' | translate }}</button>
      </form>
    </div>
  `,
  styleUrls: ['../static/css/login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorCode: string|null = null;
  errorArgs: any = {};
  errorMessages: string[] = [];
  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  constructor(
    private auth: AuthService,
    private errorService: ErrorService,
    private translate: TranslateService
  ) {}

  onLogin() {
    this.auth.login({ username: this.username, password: this.password })
      .subscribe({
        next: () => {
          this.errorCode = null;
          this.errorArgs = {};
          this.errorMessages = [];
          this.auth.notifyAuthChanged(true);
        },
        error: err => {
          const { code, args } = this.errorService.handleError(err);
          this.errorCode = code;
          this.errorArgs = args;
          this.errorMessages = this.errorService.getValidationMessages(code, args);
        }
      });
  }
}
