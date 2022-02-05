import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TEACHING_MODULE_FUNCTIONS } from 'src/app/teaching-module-functions/shared/teaching-module-functions.enums';

import { AbstractTeachingModulesService } from './teaching-modules.abstract.service';
import { TeachingModule, UserTeachingModulesMapping } from './teaching-modules.interface';

@Injectable({
  providedIn: 'root'
})
export class MockTeachingModulesService implements AbstractTeachingModulesService {

  private mockTeachingModules: TeachingModule[] = [
    {
      id: '1',
      name: 'SDLC',
      functions: [
        TEACHING_MODULE_FUNCTIONS.CALENDAR,
        TEACHING_MODULE_FUNCTIONS.FEEDBACK,
        TEACHING_MODULE_FUNCTIONS.NOTICE,
        TEACHING_MODULE_FUNCTIONS.QUIZ,
        TEACHING_MODULE_FUNCTIONS.Q_AND_A,
        TEACHING_MODULE_FUNCTIONS.RESOURCE
      ]
    },
    {
      id: '2',
      name: 'IoT',
      functions: [
        TEACHING_MODULE_FUNCTIONS.NOTICE,
        TEACHING_MODULE_FUNCTIONS.QUIZ,
        TEACHING_MODULE_FUNCTIONS.RESOURCE
      ]
    }
  ];

  private mockUserTeachingModulesMappings: UserTeachingModulesMapping[] = [
    {
      userId: "9cd67255-69f7-4690-822e-fab4bcb4d1a9", // student1
      modules: ["1", "2"],
    },
    {
      userId: "c922b40e-2e23-42fc-8924-da97f1681c49", // student2
      modules: ["1"],
    },
    {
      userId: "596595e5-b25a-4cb2-9347-499d2b3c05f6", // tutor1
      modules: ["1", "2"],
    }
  ];

  constructor() { }

  public getTeachingModules(): Observable<TeachingModule[]> {
    return of(this.mockTeachingModules);
  }

  public getTeachingModulesForUser(userId: string): Observable<TeachingModule[]> {
    let teachingModules: TeachingModule[] = [];

    const index = this.mockUserTeachingModulesMappings.findIndex(x => x.userId === userId)
    if (index > -1) {
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
      return of(this.mockTeachingModules[index])
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
