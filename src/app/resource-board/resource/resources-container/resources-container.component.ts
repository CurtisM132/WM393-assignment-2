import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractResourceService } from '../shared/resource.abstract-service';
import { Resource } from '../shared/resource.interface';

@Component({
  selector: 'app-resources-container',
  templateUrl: './resources-container.component.html',
  styleUrls: ['./resources-container.component.css']
})
export class ResourcesContainerComponent implements OnInit {

  public resourceBoardId: string;
  public resources: Resource[] = [];

  constructor(
    private route: ActivatedRoute,
    private resourceService: AbstractResourceService
  ) { }

  ngOnInit(): void {
    // Get the resource board ID from the route (URL) 
    // then load the resources associated with that resource board
    this.route.paramMap
      .subscribe((params: any) => {
        this.resourceBoardId = params.get('id');
        this.getResources()
      })
  }

  public getResources() {
    this.resourceService.getResources(this.resourceBoardId)
      .subscribe((resources: Resource[]) => {
        this.resources = resources
      })
  }

  public downloadResource(resource: Resource) {
    if (resource.id) {
      this.resourceService.downloadResource(resource.id)
        .subscribe((success: boolean) => {
          if (!success) {
            console.error("Failed to download resource")
          }
        })
    } else {
      console.error("Failed to download resource - id doesn't exist")
    }
  }

  public deleteResource(id: string) {
    if (id) {
      this.resourceService.deleteResource(id)
        .subscribe((success: boolean) => {
          if (success) {
            this.getResources()
          } else {
            console.error("Failed to delete resource")
          }
        })
    } else {
      console.error("Failed to delete resource - id not supplied")
    }
  }

}
