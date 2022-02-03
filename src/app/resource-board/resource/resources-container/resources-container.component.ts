import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FileHandle } from '../../../file-upload/drag-and-drop-file.directive';
import { ACCEPTED_FILE_EXTENSIONS, fileExtensionToFileType, FILE_TYPE } from '../shared/resource-file.enums';

import { AbstractResourceService } from '../shared/resource.abstract-service';
import { Resource } from '../shared/resource.interface';

@Component({
  selector: 'app-resources-container',
  templateUrl: './resources-container.component.html',
  styleUrls: ['./resources-container.component.css']
})
export class ResourcesContainerComponent implements OnInit {

  public resourceBoardId: string;

  // Needed to control the file upload component behaviour (i.e., if it displays the upload button or not)
  public resources: Resource[] = [];

  public resources$: BehaviorSubject<Resource[]> = new BehaviorSubject<Resource[]>([]);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resourceService: AbstractResourceService
  ) { }

  ngOnInit(): void {
    // Get the resource board ID from the route (URL) 
    // then load the resources associated with that resource board
    this.route.paramMap
      .subscribe((params: any) => {
        this.resourceBoardId = params.get('boardId');
        this.getResources();
      })
  }

  public handleFilesDropped(files: FileHandle[]): void {
    files.forEach(file => {
      this.uploadResource(file);
    });
  }

  public handleResourceClicked(resource: Resource): void {
    if (resource.fileType === FILE_TYPE.IMAGE || resource.fileType === FILE_TYPE.VIDEO) {
      // This route corresponds with a resource display component (see routing module)
      this.router.navigate([resource.id], { relativeTo: this.route });
    } else {
      this.downloadResource(resource);
    }
  }

  public getResources(): void {
    this.resourceService.getResources(this.resourceBoardId)
      .subscribe((resources) => {
        if (resources) {
          this.resources$.next(resources);
          this.resources = resources;
        } else {
          console.error(`Failed to get Resource Board's Resources for Resource Board ID: ${this.resourceBoardId}`);
        }
      })
  }

  public downloadResource(resource: Resource): void {
    if (resource.id) {
      this.resourceService.downloadResource(this.resourceBoardId, resource.id)
        .subscribe((success: boolean) => {
          if (!success) {
            console.error("Failed to download resource");
          }
        })
    } else {
      console.error("Failed to download resource - id doesn't exist");
    }
  }

  public deleteResource(id: string): void {
    if (id) {
      this.resourceService.deleteResource(this.resourceBoardId, id)
        .subscribe((success: boolean) => {
          if (success) {
            this.getResources();
          } else {
            console.error("Failed to delete resource");
          }
        })
    } else {
      console.error("Failed to delete resource - id not supplied");
    }
  }

  public uploadResource(file: FileHandle): void {
    const fileName = file.file.name.split(".")[0];
    const fileExt = file.file.name.split(".")[1];

    // Check if the file extension is acceptable
    if (Object.values<string>(ACCEPTED_FILE_EXTENSIONS).includes(fileExt)) {
      const resource: Resource = {
        name: fileName,
        uploadDate: new Date(),
        fileType: fileExtensionToFileType(fileExt as ACCEPTED_FILE_EXTENSIONS),
        fileFormat: fileExt as ACCEPTED_FILE_EXTENSIONS,
        filePath: file.plainUrl,
      };

      this.resourceService.uploadResource(this.resourceBoardId, resource)
        .subscribe(({ id, success }) => {
          if (success) {
            this.getResources();
          } else {
            console.error("Failed to upload resource");
          }
        });
    } else {
      // TODO: Indicate in a visual way to the user that the file type is not acceptable
      console.error(`File extension (${fileExt}) not acceptable`);
    }
  }

}
