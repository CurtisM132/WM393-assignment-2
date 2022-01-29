import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FileHandle } from '../../../file-upload/drag-and-drop-file.directive';
import { ACCEPTED_FILE_EXTENSIONS } from '../shared/resource-file.enums';

import { AbstractResourceService } from '../shared/resource.abstract-service';
import { Resource } from '../shared/resource.interface';

@Component({
  selector: 'app-resources-container',
  templateUrl: './resources-container.component.html',
  styleUrls: ['./resources-container.component.css']
})
export class ResourcesContainerComponent implements OnInit {

  public resourceBoardId: string;
  public resources$: BehaviorSubject<Resource[]> = new BehaviorSubject<Resource[]>([]);

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
        this.resources$.next(resources)
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

  public uploadResource(file: FileHandle) {
    // Check if the file extension is acceptable
    const fileName = file.file.name.split(".")[0]
    const fileExt = file.file.name.split(".")[1]

    if (Object.values<string>(ACCEPTED_FILE_EXTENSIONS).includes(fileExt)) {
      const resource: Resource = {
        name: fileName,
        uploadDate: new Date(),
        fileFormat: fileExt as ACCEPTED_FILE_EXTENSIONS,
        filePath: file.plainUrl,
      }
  
      this.resourceService.uploadResource(resource)
        .subscribe(({ id, success }) => {
          if (success) {
            this.getResources()
          } else {
            console.error("Failed to delete resource")
          }
        })
    }

    // TODO: Indicate to the user that the file type is not acceptable
  }

  public handleFilesDropped(files: FileHandle[]): void {
    files.forEach(file => {
      this.uploadResource(file)
    })
  }

}
