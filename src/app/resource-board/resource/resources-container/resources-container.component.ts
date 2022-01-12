import { Component, OnInit } from '@angular/core';
import { AbstractResourceService } from '../shared/resource.abstract-service';
import { Resource } from '../shared/resource.interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-resources-container',
  templateUrl: './resources-container.component.html',
  styleUrls: ['./resources-container.component.css']
})
export class ResourcesContainerComponent implements OnInit {

  public resources: Resource[] = [];

  constructor(
    private route: ActivatedRoute,
    private resourceService: AbstractResourceService
  ) { }

  ngOnInit(): void {
    // Get the resource board ID from the route (URL) 
    // then load the resources associated with that resource board
    this.route.paramMap.pipe(
      switchMap((params: any) => {
        const resourceBoardId = params.get('id');
        return this.resourceService.getResources(resourceBoardId);
      })
    ).subscribe((resources: Resource[]) => {
      this.resources = resources
    })
  }

}
