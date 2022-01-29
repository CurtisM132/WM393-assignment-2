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
        this.resourceBoardId = params.get('id');
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
      // Navigate to /resource/boardId/resourceId
      // This route corresponds with a resource display component (see routing module)
      this.router.navigate([`/resource`, this.resourceBoardId, resource.id]);
    } else {
      this.downloadResource(resource);
    }
  }

  public getResources(): void {
    this.resourceService.getResources(this.resourceBoardId)
      .subscribe((resources: Resource[]) => {
        this.resources$.next(resources);
        this.resources = resources;
      })
  }

  public downloadResource(resource: Resource): void {
    if (resource.id) {
      this.resourceService.downloadResource(resource.id)
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
      this.resourceService.deleteResource(id)
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
    // Check if the file extension is acceptable
    const fileName = file.file.name.split(".")[0];
    const fileExt = file.file.name.split(".")[1];

    if (Object.values<string>(ACCEPTED_FILE_EXTENSIONS).includes(fileExt)) {
      const resource: Resource = {
        name: fileName,
        uploadDate: new Date(),
        fileType: fileExtensionToFileType(fileExt as ACCEPTED_FILE_EXTENSIONS),
        fileFormat: fileExt as ACCEPTED_FILE_EXTENSIONS,
        filePath: file.plainUrl,
      };
  
      this.resourceService.uploadResource(resource)
        .subscribe(({ id, success }) => {
          if (success) {
            this.getResources();
          } else {
            console.error("Failed to delete resource");
          }
        });
    }

    // TODO: Indicate to the user that the file type is not acceptable
  }

}
