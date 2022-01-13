import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { saveAs } from 'file-saver';

import { Resource } from './resource.interface';
import { AbstractResourceService } from './resource.abstract-service';
import { ACCEPTED_FILE_EXTENSIONS } from './resource-file.enums';

@Injectable({
  providedIn: 'root'
})
export class MockResourceService implements AbstractResourceService {

  private mockResources: Resource[] = [
    {
      id: '1',
      name: '3D Cartography Example',
      uploadDate: new Date("2021-10-30"),
      fileFormat: ACCEPTED_FILE_EXTENSIONS.JPEG,
      filePath: './assets/demo-resources/cartographic_example.png',
      comment: 'An example of the map I want students to produce for their project'
    },
    {
      id: '2',
      name: 'How to Setup ArcGIS',
      uploadDate: new Date("2022-01-13"),
      fileFormat: ACCEPTED_FILE_EXTENSIONS.MP4,
      filePath: './assets/demo-resources/arcgis_setup.mp4',
    }
  ];

  constructor() { }

  getResources(id: string): Observable<Resource[]> {
    return of(this.mockResources);
  }

  uploadResource(resource: Resource): Observable<string> {
    const id = (this.mockResources.length + 1).toString();

    this.mockResources.push({
      ...resource,
      id,
    });

    return of(id);
  }

  deleteResource(id: string): Observable<boolean> {
    if (id && id !== "") {
      this.mockResources = this.mockResources
        .filter((resourceBoard: Resource) => resourceBoard.id !== id);

      return of(true);
    }

    return of(false);
  }

  downloadResource(id: string): Observable<boolean> {
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
