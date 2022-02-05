import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AbstractAuthenticationService } from './authentication.abstract.service';


@Injectable({
  providedIn: 'root'
})
export class MockAuthenticationService extends AbstractAuthenticationService {
  constructor() {
    super();

    this.loggedIn$ = new BehaviorSubject<boolean>(true);
    // Default login as a tutor
    this.userId$ = new BehaviorSubject<string>("596595e5-b25a-4cb2-9347-499d2b3c05f6");
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
