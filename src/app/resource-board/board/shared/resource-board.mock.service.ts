import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AbstractResourceBoardService } from './resource-board.abstract-service';
import { ResourceBoards, ResourceBoardSummary } from './resource-board.interface';
import { mockResourceBoards } from './resource-board.mock.data';

@Injectable({
  providedIn: 'root'
})
export class MockResourceBoardService implements AbstractResourceBoardService {

  private mockResourceBoards: ResourceBoards[] = mockResourceBoards;

  public getResourceBoards(moduleId: string): Observable<ResourceBoardSummary[] | undefined> {
    // Find the module specific resource boards
    const index = this.mockResourceBoards.findIndex(x => x.id === moduleId);
    if (index > -1) {
      return of(this.mockResourceBoards[index].boards);
    }

    return of(undefined);
  }

  public createResourceBoard(moduleId: string, name: string): Observable<string | undefined> {
    const boardIndex = this.mockResourceBoards.findIndex(x => x.id === moduleId);
    if (boardIndex > -1) {
      // Don't create the resource board if there is already a resource board of the same name
      const resource = this.mockResourceBoards[boardIndex].boards.find(x => x.name === name);
      if (!resource) {
        const id = (this.mockResourceBoards[boardIndex].boards.length + 1).toString();
  
        // Create the resource board
        this.mockResourceBoards[boardIndex].boards.push({
          id,
          name,
        });
  
        return of(id);
      }
    }

    return of(undefined);
  }

  public deleteResourceBoard(moduleId: string, boardId: string): Observable<boolean> {
    const index = this.mockResourceBoards.findIndex(x => x.id === moduleId);
    if (index > -1) {
      // Remove the resource board from the array if it matches the given id
      this.mockResourceBoards[index].boards = this.mockResourceBoards[index].boards
        .filter((resourceBoard: ResourceBoardSummary) => resourceBoard.id !== boardId);

      return of(true);
    }

    return of(false);
  }
}