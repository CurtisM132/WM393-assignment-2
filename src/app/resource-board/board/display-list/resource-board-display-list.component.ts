import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
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

  public destroyed$: Subject<void> = new Subject<void>();

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
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
    this.selectedOptions[0] = this.resourceBoards[0];
    this.onSelectionChange();
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
  }

}
