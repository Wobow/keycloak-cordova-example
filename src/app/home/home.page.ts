import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  authenticated: boolean;

  constructor(private keycloakService: KeycloakService) {}

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
    this.keycloakService.isLoggedIn().then((isLoggedIn) => this.authenticated = isLoggedIn);
  }

  register() {
    this.keycloakService.register().then(() => this.checkLogin());
  }

  login() {
    this.keycloakService.login().then(() => this.checkLogin());
  }

  logout() {
    this.keycloakService.logout().then(() => this.checkLogin());
  }
}
