import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
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

  // TODO: Use authenication system
  public authenticated = true;
  public selectedOptions: ResourceBoardSummary[] = [];

  constructor() { }

  ngOnInit() {
    this.selectedOptions[0] = this.resourceBoards[0];

    this.onSelectionChange();
  }

  public onSelectionChange(): void {
    this.selectionChangeEvent.emit(this.selectedOptions[0]);
  }

  public deleteResourceBoard(event: any, id: string): void {
    event.stopPropagation();

    this.deleteResourceBoardEvent.emit(id);
  }

}
