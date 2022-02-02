import { Observable } from 'rxjs';
import { TEACHING_MODULE_FUNCTIONS } from 'src/app/teaching-module-functions/shared/teaching-module-functions.enums';

import { TeachingModule } from './teaching-modules.interface';


export abstract class AbstractTeachingModulesService {
    public abstract getTeachingModules(): Observable<TeachingModule[]>;
    public abstract getTeachingModulesForUser(userId: string): Observable<TeachingModule[]>;
    public abstract getTeachingModule(moduleId: string): Observable<TeachingModule | undefined>;
    public abstract deleteModuleFunction(moduleId: string, moduleFunction: TEACHING_MODULE_FUNCTIONS): Observable<boolean>;
}