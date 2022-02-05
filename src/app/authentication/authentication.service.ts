import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { BehaviorSubject } from 'rxjs';

import { AbstractAuthenticationService } from './authentication.abstract.service';
import { getLoggedInState, getUserId, getUsername, getUserRoles, KEYCLOAK_POLL_RATE } from './keycloak-utils';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends AbstractAuthenticationService {
  private roles: string[] = [];

  constructor(private keycloakService: KeycloakService) {
    super()

    this.loggedIn$ = new BehaviorSubject<boolean>(false);
    this.userId$ = new BehaviorSubject<string>("");
    this.username$ = new BehaviorSubject<string>("");
    this.haveRoles$ = new BehaviorSubject<boolean>(false);

    // Poll Keycloak with an interval until it's ready
    const i = setInterval(() => {
      getLoggedInState(this.keycloakService)
        .then(loggedIn => {
          this.loggedIn$.next(loggedIn);

          if (loggedIn) {
            // Get the account id
            getUserId(this.keycloakService)
              .then(userId => {
                if (userId) {
                  this.userId$.next(userId);
                }
              });

            // Get the account username
            getUsername(this.keycloakService)
              .then(username => {
                if (username) {
                  this.username$.next(username);
                }
              });

            // Get account roles (which specify if the user is a student or tutor)
            getUserRoles(this.keycloakService)
              .then(roles => {
                if (roles) {
                  this.roles = roles;
                  this.haveRoles$.next(true);
                }
              });

            clearInterval(i);
          }
        })
    }, KEYCLOAK_POLL_RATE)
  }

  public logout(): void {
    this.keycloakService.logout();
    this.loggedIn$.next(false);
  }

  public isTutor(): boolean {
    return this.roles.includes(this.TUTOR_ROLE);
  }

  public isStudent(): boolean {
    return this.roles.includes(this.STUDENT_ROLE);
  }

}
