import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { saveAs } from 'file-saver';

import { Resource } from './resource.interface';
import { AbstractResourceService } from './resource.abstract.service';
import { mockBoardResources } from './resource.mock.data';
import { BoardResources } from './board.resources.interface';


@Injectable({
  providedIn: 'root'
})
export class MockResourceService implements AbstractResourceService {

  private mockBoardResources: BoardResources[] = mockBoardResources;

  constructor() { }

  public getResources(boardId: string): Observable<Resource[] | undefined> {
    const index = this.mockBoardResources.findIndex(x => x.id === boardId)
    if (index > -1) {
      return of(this.mockBoardResources[index].resources);
    }

    return of(undefined)
  }

  public getResource(boardId: string, resourceId: string): Observable<Resource | undefined> {
    // Find the appropriate resource board
    const boardIndex = this.mockBoardResources.findIndex(x => x.id === boardId)
    if (boardIndex > -1) {
      // Find the appropriate resource
      const resourceIndex = this.mockBoardResources[boardIndex].resources
        .findIndex(resource => resource.id === resourceId);

      if (resourceIndex > -1) {
        return of(this.mockBoardResources[boardIndex].resources[resourceIndex]);
      }
    }

    return of(undefined);
  }

  public uploadResource(boardId: string, resource: Resource): Observable<{ id: string, success: boolean }> {
    // Find the appropriate resource board
    const boardIndex = this.mockBoardResources.findIndex(x => x.id === boardId)
    if (boardIndex > -1) {
      const id = (this.mockBoardResources[boardIndex].resources.length + 1).toString();

      // Push the resource into that board's resources
      this.mockBoardResources[boardIndex].resources.push({
        id,
        ...resource,
      });

      return of({ id, success: true });
    }

    return of({ id: "", success: false });
  }

  public deleteResource(boardId: string, resourceId: string): Observable<boolean> {
    // Find the appropriate resource board
    const boardIndex = this.mockBoardResources.findIndex(x => x.id === boardId)
    if (boardIndex > -1) {
      if (resourceId && resourceId !== "") {
        this.mockBoardResources[boardIndex].resources =
          this.mockBoardResources[boardIndex].resources.filter((resourceBoard: Resource) => resourceBoard.id !== resourceId);

        return of(true);
      }
    }

    return of(false);
  }

  public downloadResource(boardId: string, resourceId: string): Observable<boolean> {
    // Find the appropriate resource board
    const boardIndex = this.mockBoardResources.findIndex(x => x.id === boardId)
    if (boardIndex > -1) {
      if (resourceId && resourceId !== "") {
        const resource = this.mockBoardResources[boardIndex].resources.find(x => x.id === resourceId)
        if (resource) {
          saveAs(resource.filePath, `${resource.name}.${resource.fileFormat}`);
  
          return of(true);
        }
      }
    }

    return of(false);
  }
}
