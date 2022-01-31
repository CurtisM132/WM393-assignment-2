import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';

/**
 * Component to hold all other components to display the Home page
 */
@Component({
  selector: 'app-home-page',
  templateUrl: './function-home-page.component.html',
  styleUrls: ['./function-home-page.component.css']
})
export class FunctionHomePageComponent implements OnInit, OnDestroy {

  public isTutor: boolean = false;

  public destroyed$: Subject<void> = new Subject<void>();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // Open the function sidebar
    this.router.navigate([{ outlets: { sidenav: 'function' } }]);

    // Subscribe to the users account roles then get if they're a tutor or not
    this.authenticationService.haveRoles$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(haveRoles => {
        if (haveRoles) {
          this.isTutor = this.authenticationService.isTutor();
        } else {
          this.isTutor = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  /**
   * Navigate to the given router path
   * @param path 
   */
  public handleNavigation(path: string): void {
    this.router.navigate([path], { relativeTo: this.route });
  }

}
