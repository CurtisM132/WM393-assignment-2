import { Observable } from 'rxjs';

import { Resource } from "./resource.interface";

export abstract class AbstractResourceService {
    public abstract getResources(): Observable<Resource[]>;
    public abstract uploadResource(resource: Resource): Observable<string>;
    public abstract deleteResource(id: string): Observable<boolean>;
    public abstract downloadResource(id: string): Observable<boolean>;
}