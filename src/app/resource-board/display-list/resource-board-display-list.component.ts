import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResourceBoardSummary } from '../shared/resource-board.interface';

@Component({
  selector: 'app-resource-board-display-list',
  templateUrl: './resource-board-display-list.component.html',
  styleUrls: ['./resource-board-display-list.component.css']
})
export class ResourceBoardDisplayListComponent implements OnInit {

  @Input() resourceBoards: ResourceBoardSummary[] = []

  @Output() deleteResourceBoardEvent = new EventEmitter<string>();

  public authenticated = true

  constructor() { }

  ngOnInit(): void {
  }

  public deleteResourceBoard(event: any, id: string) {
    event.stopPropagation()

    this.deleteResourceBoardEvent.emit(id)
  }

}
