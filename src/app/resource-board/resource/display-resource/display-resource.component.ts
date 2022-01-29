import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FILE_TYPE } from '../shared/resource-file.enums';
import { AbstractResourceService } from '../shared/resource.abstract-service';
import { Resource } from '../shared/resource.interface';

@Component({
  selector: 'app-display-resource',
  templateUrl: './display-resource.component.html',
  styleUrls: ['./display-resource.component.css']
})
export class DisplayResourceComponent implements OnInit {

  public resource: Resource;
  public safeToDisplay: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private resourceService: AbstractResourceService,
  ) { }

  ngOnInit(): void {
    // Get the resource board ID from the route (URL) 
    // then load the resources associated with that resource board
    this.route.paramMap
      .subscribe((params: any) => {
        const id = params.get('id');

        if (id) {
          this.resourceService.getResource(id)
            .subscribe(resource => {
              if (resource) {
                this.resource = resource;
              }
            });
        }
      })

    // Check inputted resouce if safe to display
    if (this.resource.fileType === FILE_TYPE.IMAGE || this.resource.fileType === FILE_TYPE.VIDEO) {
      this.safeToDisplay = true;
    }
  }

}
