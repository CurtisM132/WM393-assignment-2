import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export abstract class AbstractAuthenticationService {

  protected readonly TUTOR_ROLE = "wmgtss-tutor";
  protected readonly STUDENT_ROLE = "wmgtss-student";

  public loggedIn$: BehaviorSubject<boolean>;
  public userId$: BehaviorSubject<string>;
  public username$: BehaviorSubject<string>;

  public haveRoles$: BehaviorSubject<boolean>;

  public abstract logout(): void;
  public abstract isTutor(): boolean;
  public abstract isStudent(): boolean;
}
