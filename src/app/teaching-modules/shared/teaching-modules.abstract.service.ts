import { Observable } from 'rxjs';

import { TeachingModule } from './teaching-modules.interface';


export abstract class AbstractTeachingModulesService {
    public abstract getTeachingModules(): Observable<TeachingModule[]>;
    public abstract getTeachingModulesForUser(userId: string): Observable<TeachingModule[]>;
    public abstract getTeachingModule(moduleId: string): Observable<TeachingModule | undefined>;
}