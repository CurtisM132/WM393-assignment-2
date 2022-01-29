import { Observable } from 'rxjs';

import { Resource } from "./resource.interface";

export abstract class AbstractResourceService {
    public abstract getResources(boardId: string): Observable<Resource[]>;
    public abstract getResource(boardId: string, resourceId: string): Observable<Resource | undefined>;
    public abstract uploadResource(resource: Resource): Observable<{id: string, success: boolean}>;
    public abstract deleteResource(id: string): Observable<boolean>;
    public abstract downloadResource(id: string): Observable<boolean>;
}