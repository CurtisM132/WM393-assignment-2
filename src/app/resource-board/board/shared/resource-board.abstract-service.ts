import { Observable } from 'rxjs';

import { ResourceBoardSummary } from "./resource-board.interface";

export abstract class AbstractResourceBoardService {
    public abstract getResourceBoards(): Observable<ResourceBoardSummary[]>;
    public abstract createResourceBoard(name: string): Observable<string>;
    public abstract deleteResourceBoard(id: string): Observable<boolean>;
}