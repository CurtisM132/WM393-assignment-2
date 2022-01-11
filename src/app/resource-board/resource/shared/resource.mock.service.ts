import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Resource } from './resource.interface';
import { AbstractResourceService } from './resource.abstract-service';

@Injectable({
  providedIn: 'root'
})
export class MockResourceService implements AbstractResourceService {

  private mockResources: Resource[] = [
    {
      id: '1',
      name: '3D Cartography Example',
      uploadDate: new Date("2021-10-30"),
      fileFormat: 'jpg',
      comment: 'An example of the map I want students to produce for their project'
    },
    {
      id: '2',
      name: 'How to Setup ArcGIS',
      uploadDate: new Date("2021-10-30"),
      fileFormat: 'mp4',
    }
  ];

  constructor() { }

  getResources(): Observable<Resource[]> {
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
    this.mockResources = this.mockResources
      .filter((resourceBoard: Resource) => resourceBoard.id !== id);

    return of(true);
  }

  downloadResource(id: string): Observable<boolean> {
    // TODO
    return of(true);
  }
}
