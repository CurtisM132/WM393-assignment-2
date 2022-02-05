import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AbstractResourceBoardService } from './resource-board.abstract-service';
import { ResourceBoards, ResourceBoardSummary } from './resource-board.interface';

@Injectable({
  providedIn: 'root'
})
export class MockResourceBoardService implements AbstractResourceBoardService {

  private mockResourceBoards: ResourceBoards[] = [
    {
      id: '1',
      boards: [
        {
          id: '1',
          name: 'Example Resource Board #1',
        },
        {
          id: '2',
          name: 'Example Resource Board #2',
        },
        {
          id: '3',
          name: 'Example Resource Board #3',
        }
      ]
    },
    {
      id: '2',
      boards: [],
    },
  ];


  public getResourceBoards(moduleId: string): Observable<ResourceBoardSummary[] | undefined> {
    const index = this.mockResourceBoards.findIndex(x => x.id === moduleId);
    if (index > -1) {
      return of(this.mockResourceBoards[index].boards);
    }

    return of(undefined);
  }

  public createResourceBoard(moduleId: string, name: string): Observable<string | undefined> {
    const index = this.mockResourceBoards.findIndex(x => x.id === moduleId);
    if (index > -1) {
      const id = (this.mockResourceBoards[index].boards.length + 1).toString();

      this.mockResourceBoards[index].boards.push({
        id,
        name,
      });

      return of(id);
    }

    return of(undefined);
  }

  public deleteResourceBoard(moduleId: string, boardId: string): Observable<boolean> {
    const index = this.mockResourceBoards.findIndex(x => x.id === moduleId);
    if (index > -1) {
      this.mockResourceBoards[index].boards = this.mockResourceBoards[index].boards
        .filter((resourceBoard: ResourceBoardSummary) => resourceBoard.id !== boardId);

      return of(true);

    }

    return of(false);
  }
}