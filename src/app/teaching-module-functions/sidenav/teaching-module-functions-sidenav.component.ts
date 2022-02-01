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

  public teachingModuleFunctionToMaterialIcon = teachingModuleFunctionToMaterialIcon;

  constructor(
    private teachingModulesService: AbstractTeachingModulesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: any) => {
        const moduleId = params.get('id');

        if (moduleId) {
          this.teachingModulesService.getTeachingModule(moduleId)
            .subscribe((teachingModule) => {
              if (teachingModule) {
                this.moduleFunctions = teachingModule.functions;
              }
            });
        }
      });
  }

  public handleNavigation(path: TEACHING_MODULE_FUNCTIONS): void {
    // Only route to resource board for this POC
    if (path === TEACHING_MODULE_FUNCTIONS.RESOURCE) {
      this.router.navigate(["/resource"], { relativeTo: this.route });
    }
  }

}
