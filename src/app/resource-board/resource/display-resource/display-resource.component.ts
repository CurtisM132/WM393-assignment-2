import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { FILE_TYPE } from '../shared/resource-file.enums';
import { AbstractResourceService } from '../shared/resource.abstract.service';
import { Resource } from '../shared/resource.interface';

@Component({
  selector: 'app-display-resource',
  templateUrl: './display-resource.component.html',
  styleUrls: ['./display-resource.component.css']
})
export class DisplayResourceComponent implements OnInit {

  public resource: Resource;
  public resourceURI: SafeUrl;
  public safeToDisplay: boolean = false;

  // Need to bind enum to a local variable so it can be used in the HTML
  public FILE_TYPE_ENUM = FILE_TYPE;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private resourceService: AbstractResourceService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: any) => {
        const boardId = params.get('boardId');
        const resourceId = params.get('resourceId');

        if (boardId && resourceId) {
          this.resourceService.getResource(boardId, resourceId)
            .subscribe(resource => {
              if (resource) {
                this.resource = resource;

                // The string URI must be sanitized first before being displayed to
                // help prevent Cross Site Scripting Security bugs (XSS)
                this.resourceURI = this.sanitizer.bypassSecurityTrustUrl(resource.filePath);
                
                // Check if resource is safe to display
                this.safeToDisplay = (resource.fileType === FILE_TYPE.IMAGE || resource.fileType === FILE_TYPE.VIDEO);
              }
            });
        }
      });
  }

  public handleClose() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
