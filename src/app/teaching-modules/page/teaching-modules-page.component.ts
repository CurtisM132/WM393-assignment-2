import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TeachingModule } from '../shared/teaching-modules.interface';
import { AbstractAuthenticationService } from '../../authentication/authentication.abstract.service';
import { AbstractTeachingModulesService } from '../shared/teaching-modules.abstract.service';


@Component({
  selector: 'app-teaching-modules-page',
  templateUrl: './teaching-modules-page.component.html',
  styleUrls: ['./teaching-modules-page.component.css']
})
export class TeachingModulesPageComponent implements OnInit {

  public teachingModules: TeachingModule[] = [];

  public destroyed$: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private authenticationService: AbstractAuthenticationService,
    private teachingModulesService: AbstractTeachingModulesService,
  ) { }

  ngOnInit(): void {
    // Subscribe to the users account roles then get if they're a tutor or not
    this.authenticationService.userId$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((userId: string) => {
        this.teachingModulesService.getTeachingModulesForUser(userId)
          .subscribe(teachingModules => this.teachingModules = teachingModules)
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  public handleModuleSelection(moduleId: string): void {
    this.router.navigate(['', moduleId]);
  }

}
