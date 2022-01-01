import { Component, OnInit } from '@angular/core';
import { AbstractResourceBoardService } from '../shared/resource-board.abstract-service';
import { ResourceBoardSummary } from '../shared/resource-board.interface';

@Component({
  selector: 'app-resource-board-page',
  templateUrl: './resource-board-page.component.html',
  styleUrls: ['./resource-board-page.component.css']
})
export class ResourceBoardPageComponent implements OnInit {

  public authenticated = true

  public resourceBoards: ResourceBoardSummary[] = []

  value = '';

  constructor(public resourceBoardService: AbstractResourceBoardService) { }

  ngOnInit(): void {
    // Get existing resource boards
    this.resourceBoardService.getResourceBoards()
    .subscribe((boards: ResourceBoardSummary[]) => {
      this.resourceBoards = boards
    })
  }

}
