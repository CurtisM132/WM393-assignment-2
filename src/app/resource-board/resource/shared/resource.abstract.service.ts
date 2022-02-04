import { Observable } from 'rxjs';

import { Resource } from "./resource.interface";

export abstract class AbstractResourceService {
    public abstract getResources(boardId: string): Observable<Resource[] | undefined>;
    public abstract getResource(boardId: string, resourceId: string): Observable<Resource | undefined>;
    public abstract uploadResource(boardId: string, resource: Resource): Observable<{id: string, success: boolean}>;
    public abstract deleteResource(boardId: string, resourceId: string): Observable<boolean>;
    public abstract downloadResource(boardId: string, resourceId: string): Observable<boolean>;
}