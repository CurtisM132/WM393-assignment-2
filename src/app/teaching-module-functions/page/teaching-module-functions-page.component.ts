import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { AbstractTeachingModulesService } from '../../teaching-modules/shared/teaching-modules.abstract.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { TEACHING_MODULE_FUNCTIONS, teachingModuleFunctionToMaterialIcon } from '../shared/teaching-module-functions.enums';


/**
 * TODO
 */
@Component({
  selector: 'app-teaching-module-functions-page',
  templateUrl: './teaching-module-functions-page.component.html',
  styleUrls: ['./teaching-module-functions-page.component.css']
})
export class TeachingModuleFunctionsPageComponent implements OnInit, OnDestroy {

  public isTutor: boolean = false;
  public moduleFunctions: TEACHING_MODULE_FUNCTIONS[] = [];

  public destroyed$: Subject<void> = new Subject<void>();

  // Needed so the HTML template can access this icon mapping function
  public teachingModuleFunctionToMaterialIcon = teachingModuleFunctionToMaterialIcon;

  constructor(
    private authenticationService: AuthenticationService,
    private teachingModulesService: AbstractTeachingModulesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: any) => {
        const moduleId = params.get('id');

        if (moduleId) {
          // Open the function sidebar
          this.router.navigate([{ outlets: { sidenav: [moduleId] } }]);

          this.teachingModulesService.getTeachingModule(moduleId)
            .subscribe((teachingModule) => {
              if (teachingModule) {
                this.moduleFunctions = teachingModule.functions;
              }
            });
        }
      })

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
  public handleNavigation(path: TEACHING_MODULE_FUNCTIONS): void {
    // Only route to resource board for this POC
    if (path === TEACHING_MODULE_FUNCTIONS.RESOURCE) {
      console.log("Routing to Resource Boards");
      this.router.navigate(["resource"], { relativeTo: this.route });
    }
  }

}