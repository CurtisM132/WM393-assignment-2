import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AbstractResourceBoardService } from './resource-board.abstract-service';
import { ResourceBoardSummary } from './resource-board.interface';

@Injectable({
  providedIn: 'root'
})
export class MockResourceBoardService implements AbstractResourceBoardService {

  private mockResourceBoards: ResourceBoardSummary[] = [
    {
      id: '1',
      name: 'WM393',
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
    this.mockResourceBoards =
      this.mockResourceBoards.filter((resourceBoard: ResourceBoardSummary) => {
        resourceBoard.id !== id;
      });

    return of(true);
  }
}