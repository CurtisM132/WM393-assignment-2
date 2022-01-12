import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractResourceBoardService } from '../board/shared/resource-board.abstract-service';
import { ResourceBoardSummary } from '../board/shared/resource-board.interface';

@Component({
  selector: 'app-resource-board-page',
  templateUrl: './resource-board-page.component.html',
  styleUrls: ['./resource-board-page.component.css']
})
export class ResourceBoardPageComponent implements OnInit {

  public authenticated = true;
  public resourceBoards: ResourceBoardSummary[] = [];

  constructor(
    private resourceBoardService: AbstractResourceBoardService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.fetchResourceBoards()
  }

  private fetchResourceBoards() {
    // Get existing resource boards
    this.resourceBoardService.getResourceBoards()
      .subscribe((boards: ResourceBoardSummary[]) => {
        this.resourceBoards = boards
      })
  }

  public createResourceBoard(name: string) {
    this.resourceBoardService.createResourceBoard(name)
      .subscribe((id: string) => {
        if (id !== "") {
          console.log("Successfully created resource board: ", name)
          this.fetchResourceBoards()
        } else {
          console.log("Failed to create resource board: ", name)
        }
      })
  }

  public deleteResourceBoard(id: string) {
    this.resourceBoardService.deleteResourceBoard(id)
      .subscribe((success: boolean) => {
        if (success) {
          console.log("Successfully deleted resource board: ", id)
          this.fetchResourceBoards()
        } else {
          console.log("Failed to delete resource board: ", id)
        }
      })
  }

  public handleBoardSelection(board: ResourceBoardSummary) {
    this.router.navigate(['/resource', board.id]);
  }

}
