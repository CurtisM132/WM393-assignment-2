import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResourceBoardSummary } from '../shared/resource-board.interface';

@Component({
  selector: 'app-resource-board-display-list',
  templateUrl: './resource-board-display-list.component.html',
  styleUrls: ['./resource-board-display-list.component.css']
})
export class ResourceBoardDisplayListComponent {

  @Input() resourceBoards: ResourceBoardSummary[] = []

  @Output() deleteResourceBoardEvent = new EventEmitter<string>();

  public authenticated = true

  constructor() { }

  public deleteResourceBoard(event: any, id: string) {
    event.stopPropagation()

    this.deleteResourceBoardEvent.emit(id)
  }

}
