import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { AbstractTeachingModulesService } from '../../teaching-modules/shared/teaching-modules.abstract.service';
import { TEACHING_MODULE_FUNCTIONS, teachingModuleFunctionToMaterialIcon } from '../shared/teaching-module-functions.enums';

@Component({
  selector: 'app-teaching-module-functions-sidenav',
  templateUrl: './teaching-module-functions-sidenav.component.html'
})
export class TeachingModuleFunctionsSidenavComponent {

  public moduleFunctions: TEACHING_MODULE_FUNCTIONS[] = [];

  public destroyed$: Subject<void> = new Subject<void>();

  // Needed so the HTML template can access this function
  public teachingModuleFunctionToMaterialIcon = teachingModuleFunctionToMaterialIcon;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teachingModulesService: AbstractTeachingModulesService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: any) => {
        const moduleId = params.get('id');

        if (moduleId) {
          // Get the teaching module functions
          this.teachingModulesService.getTeachingModule(moduleId)
            .subscribe((teachingModule) => {
              if (teachingModule) {
                this.moduleFunctions = teachingModule.functions;
              }
            });
        }
      });
  }

  public handleNavigateToModules(): void {
    this.router.navigate([""]);
  }

  public handleNavigation(path: TEACHING_MODULE_FUNCTIONS): void {
    // Only route to resource board for this prototype
    if (path === TEACHING_MODULE_FUNCTIONS.RESOURCE) {
      this.router.navigate(["/resource"], { relativeTo: this.route });
    }
  }

}
