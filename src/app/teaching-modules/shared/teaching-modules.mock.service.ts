import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TEACHING_MODULE_FUNCTIONS } from '../../teaching-module-functions/shared/teaching-module-functions.enums';
import { AbstractTeachingModulesService } from './teaching-modules.abstract.service';
import { TeachingModule, UserTeachingModulesMapping } from './teaching-modules.interface';
import { mockTeachingModules, mockUserTeachingModulesMappings } from './teaching-modules.mock.data';


@Injectable({
  providedIn: 'root'
})
export class MockTeachingModulesService implements AbstractTeachingModulesService {

  private mockTeachingModules: TeachingModule[] = mockTeachingModules;
  private mockUserTeachingModulesMappings: UserTeachingModulesMapping[] = mockUserTeachingModulesMappings;

  constructor() { }

  public getTeachingModulesForUser(userId: string): Observable<TeachingModule[]> {
    let teachingModules: TeachingModule[] = [];

    // Get the module mapping record for the user account
    const index = this.mockUserTeachingModulesMappings.findIndex(x => x.userId === userId)
    if (index > -1) {
      // Add all modules that are in that module mapping record to an array
      this.mockTeachingModules.forEach((module: TeachingModule) => {
        if (this.mockUserTeachingModulesMappings[index].modules.includes(module.id)) {
          teachingModules.push(module)
        }
      })
    }

    return of(teachingModules);
  }

  public getTeachingModule(moduleId: string): Observable<TeachingModule | undefined> {
    const index = this.mockTeachingModules.findIndex(x => x.id === moduleId)
    if (index > -1) {
      return of(this.mockTeachingModules[index]);
    }

    return of(undefined)
  }

  public deleteModuleFunction(moduleId: string, moduleFunction: TEACHING_MODULE_FUNCTIONS): Observable<boolean> {
    const index = this.mockTeachingModules.findIndex(x => x.id === moduleId)
    if (index > -1) {
      this.mockTeachingModules[index].functions =
        this.mockTeachingModules[index].functions.filter((x: TEACHING_MODULE_FUNCTIONS) => x !== moduleFunction);

      return of(true);
    }

    return of(false);
  }

}
