import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AbstractAuthenticationService } from './authentication.abstract.service';


@Injectable({
  providedIn: 'root'
})
export class MockAuthenticationService extends AbstractAuthenticationService {
  constructor() {
    super();

    this.loggedIn$ = new BehaviorSubject<boolean>(true);
    this.userId$ = new BehaviorSubject<string>("ff6de3bd-27b5-408f-92b2-f38f2e194324");
    this.username$ = new BehaviorSubject<string>("tutor1");
    this.haveRoles$ = new BehaviorSubject<boolean>(true);
  }

  public logout(): void {
    this.loggedIn$.next(false);
  }

  public isTutor(): boolean {
    return true;
  }

  public isStudent(): boolean {
    return false;
  }

}
