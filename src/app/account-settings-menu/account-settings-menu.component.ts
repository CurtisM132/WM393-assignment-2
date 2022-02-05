import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { AbstractAuthenticationService } from '../authentication/authentication.abstract.service';


@Component({
  selector: 'app-account-settings-menu',
  templateUrl: './account-settings-menu.component.html',
  styleUrls: ['./account-settings-menu.component.css']
})
export class AccountSettingsMenuComponent implements OnInit, OnDestroy {

  public loggedIn: boolean = false;
  public username: string = "";

  public destroyed$: Subject<void> = new Subject<void>();

  constructor(private authenticationService: AbstractAuthenticationService) { }

  ngOnInit(): void {
    // Get the logged in state
    this.authenticationService.loggedIn$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(loggedIn => this.loggedIn = loggedIn);

    // Get the users username for display purposes
    this.authenticationService.username$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(username => this.username = username);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  public handleLogout(): void {
    this.authenticationService.logout();
    this.loggedIn = false;
    this.username = "";
  }

}
