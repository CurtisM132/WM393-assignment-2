import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { getLoggedInState, getUsername } from '../keycloak';

@Component({
  selector: 'app-account-settings-menu',
  templateUrl: './account-settings-menu.component.html',
  styleUrls: ['./account-settings-menu.component.css']
})
export class AccountSettingsMenuComponent implements OnInit {

  public loggedIn: boolean = false;
  public username: string = "";

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    const i = setInterval(() => {
      getLoggedInState(this.keycloakService).then(loggedInState => {
        if (loggedInState) {
          this.loggedIn = true;
          getUsername(this.keycloakService).then(username => this.username = username);

          clearInterval(i);
        }
      })
    }, 1000)
  }

  public handleLogout(): void {
    this.keycloakService.logout()
      .then(_ => {
        this.loggedIn = false;
        this.username = "";
      });
  }

}
