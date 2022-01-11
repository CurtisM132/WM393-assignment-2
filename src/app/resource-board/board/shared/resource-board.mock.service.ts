import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AbstractResourceBoardService } from './resource-board.abstract-service';
import { ResourceBoardSummary } from './resource-board.interface';

@Injectable({
  providedIn: 'root'
})
export class MockResourceBoardService implements AbstractResourceBoardService {

  private mockResourceBoards: ResourceBoardSummary[] = [ // move to somewhere else noob
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
  ];

  getResourceBoards(): Observable<ResourceBoardSummary[]> {
    return of(this.mockResourceBoards);
  }

  createResourceBoard(name: string): Observable<string> {
    const id = (this.mockResourceBoards.length + 1).toString();

    this.mockResourceBoards.push({
      id,
      name,
    });

    return of(id); 
  }

  deleteResourceBoard(id: string): Observable<boolean> {
    this.mockResourceBoards = this.mockResourceBoards
      .filter((resourceBoard: ResourceBoardSummary) => resourceBoard.id !== id);

    return of(true);
  }
}