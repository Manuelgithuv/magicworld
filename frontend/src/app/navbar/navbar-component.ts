import {Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth-service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <nav class="custom-navbar px-4">
      <a class="brand" routerLink="/">
        <img class="brand__logo"
             ngSrc="assets/images/FondoMagicworld.png"
             alt="Magicworld logo"
             width="200"
             height="60"/>

      </a>
      <ul class="nav-list">
        @if (!isAuthenticated) {
          <li class="nav-list__item">
            <a class="nav-btn" routerLink="/login">Login</a>
          </li>
          <li class="nav-list__item">
            <a class="nav-btn" routerLink="/register">Register</a>
          </li>
        }
        @if (isAuthenticated) {
          <li class="nav-list__item">
            <button class="nav-btn" (click)="logout()">Logout</button>
          </li>
        }
        <li class="nav-list__item">
          <a class="nav-btn" routerLink="/season-pass">
            <i class="fa fa-id-card"></i>
            Season Pass
          </a>
        </li>
        <li class="nav-list__item">
          <a class="nav-btn" routerLink="/tickets">
            <i class="fa fa-ticket-alt"></i>
            Tickets
          </a>
        </li>
        <li class="nav-list__item">
          <a class="nav-btn" routerLink="/hotel-pack">
            <i class="fa fa-bed"></i>
            Hotel + Tickets
          </a>
        </li>
        <li class="nav-list__item">
          <a class="nav-btn" routerLink="/school-groups">
            <i class="fa fa-school"></i>
            School Groups
          </a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['../static/css/navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;

  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.checkAuth();
    setInterval(() => this.checkAuth(), 7200000);

    this.auth.authChanged.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
  }

  checkAuth() {
    this.auth.isAuthenticated().subscribe(auth => {
      this.isAuthenticated = auth;
    });
  }
  logout() {
    this.auth.logout().subscribe(() => {
      this.auth.notifyAuthChanged(false);
    });
  }
}
