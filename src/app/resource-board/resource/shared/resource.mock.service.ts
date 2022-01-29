import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { saveAs } from 'file-saver';

import { Resource } from './resource.interface';
import { AbstractResourceService } from './resource.abstract-service';
import { ACCEPTED_FILE_EXTENSIONS, FILE_TYPE } from './resource-file.enums';

@Injectable({
  providedIn: 'root'
})
export class MockResourceService implements AbstractResourceService {

  private mockResources: Resource[] = [
    {
      id: '1',
      name: '3D Cartography Example',
      uploadDate: new Date("2021-10-30"),
      fileType: FILE_TYPE.IMAGE,
      fileFormat: ACCEPTED_FILE_EXTENSIONS.JPEG,
      filePath: './assets/demo-resources/cartographic_example.png',
      comment: 'An example of the map I want you to produce for your project'
    },
    {
      id: '2',
      name: 'How to Setup ArcGIS',
      uploadDate: new Date("2022-01-13"),
      fileType: FILE_TYPE.VIDEO,
      fileFormat: ACCEPTED_FILE_EXTENSIONS.MP4,
      filePath: './assets/demo-resources/arcgis_setup.mp4',
    }
  ];

  constructor() { }

  public getResources(boardId: string): Observable<Resource[]> {
    return of(this.mockResources);
  }

  public getResource(boardId: string, resourceId: string): Observable<Resource | undefined> {
    const index = this.mockResources.findIndex(resource => resource.id === resourceId);
    if (index > -1) {
      return of(this.mockResources[index]);
    }

    return of(undefined);
  }

  public uploadResource(resource: Resource): Observable<{ id: string, success: boolean }> {
    const id = (this.mockResources.length + 1).toString();

    this.mockResources.push({
      id,
      ...resource,
    });

    return of({ id, success: true });
  }

  public deleteResource(id: string): Observable<boolean> {
    if (id && id !== "") {
      this.mockResources = this.mockResources
        .filter((resourceBoard: Resource) => resourceBoard.id !== id);

      return of(true);
    }

    return of(false);
  }

  public downloadResource(id: string): Observable<boolean> {
    if (id && id !== "") {
      const resource = this.mockResources.find(x => x.id === id)
      if (resource) {
        saveAs(resource.filePath, `${resource.name}.${resource.fileFormat}`);

        return of(true);
      }
    }

    return of(false);
  }
}
