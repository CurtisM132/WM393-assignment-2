import { Observable } from 'rxjs';

import { ResourceBoardSummary } from "./resource-board.interface";

export abstract class AbstractResourceBoardService {
    public abstract getResourceBoards(moduleId: string): Observable<ResourceBoardSummary[] | undefined>;
    public abstract createResourceBoard(moduleId: string, name: string): Observable<string  | undefined>;
    public abstract deleteResourceBoard(moduleId: string, boardId: string): Observable<boolean>;
}