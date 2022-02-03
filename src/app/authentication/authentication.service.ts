import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { BehaviorSubject } from 'rxjs';
import { getLoggedInState, getUserId, getUsername, getUserRoles } from './keycloak-utils';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly TUTOR_ROLE = "wmgtss-tutor";
  private readonly STUDENT_ROLE = "wmgtss-student";

  public loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public userId$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public username$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  private roles: string[] = [];
  public haveRoles$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private keycloakService: KeycloakService) {
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
    }, 1000)
  }

  public logout(): void {
    this.keycloakService.logout();
  }

  public isTutor(): boolean {
    return this.roles.includes(this.TUTOR_ROLE);
  }

  public isStudent(): boolean {
    return this.roles.includes(this.STUDENT_ROLE);
  }

}
