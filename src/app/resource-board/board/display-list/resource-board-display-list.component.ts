import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { AbstractAuthenticationService } from '../../../authentication/authentication.abstract.service';
import { ResourceBoardSummary } from '../shared/resource-board.interface';


@Component({
  selector: 'app-resource-board-display-list',
  templateUrl: './resource-board-display-list.component.html',
  styleUrls: ['./resource-board-display-list.component.css']
})
export class ResourceBoardDisplayListComponent implements OnInit {

  @Input() resourceBoards: ResourceBoardSummary[] = [];

  @Output() deleteResourceBoardEvent = new EventEmitter<string>();
  @Output() selectionChangeEvent = new EventEmitter<ResourceBoardSummary>();

  public isTutor: boolean = false;
  public selectedOptions: ResourceBoardSummary[] = [];

  private destroyed$: Subject<void> = new Subject<void>();

  constructor(
    private authenticationService: AbstractAuthenticationService,
  ) { }

  ngOnInit() {
    // Get whether or not the user is a tutor
    this.authenticationService.haveRoles$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(haveRoles => {
        if (haveRoles) {
          this.isTutor = this.authenticationService.isTutor();
        } else {
          this.isTutor = false;
        }
      });

    // Select the first resource board automatically on page load
    if (this.resourceBoards.length > 0) {
      this.selectedOptions[0] = this.resourceBoards[0];
      this.onSelectionChange();
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  public onSelectionChange(): void {
    this.selectionChangeEvent.emit(this.selectedOptions[0]);
  }

  public deleteResourceBoard(event: any, id: string): void {
    event.stopPropagation();

    this.deleteResourceBoardEvent.emit(id);

    // If the user deletes the resource board they are currently viewing 
    // then select the new first resource board in the display list
    // TODO: This works but doesn't trigger a selection/ripple in the Mat Selection List
    setTimeout(() => {
      if (this.selectedOptions[0].id === id) {
        this.selectedOptions[0] = this.resourceBoards[0];
        this.onSelectionChange();
      }
    });
  }

}
