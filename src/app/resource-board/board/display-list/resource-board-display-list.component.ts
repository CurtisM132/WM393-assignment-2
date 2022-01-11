import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ResourceBoardSummary } from '../shared/resource-board.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-board-display-list',
  templateUrl: './resource-board-display-list.component.html',
  styleUrls: ['./resource-board-display-list.component.css']
})
export class ResourceBoardDisplayListComponent implements OnInit {

  @Input() resourceBoards: ResourceBoardSummary[] = []

  @Output() deleteResourceBoardEvent = new EventEmitter<string>();

  public authenticated = true
  public selectedOptions: ResourceBoardSummary[] = []

  constructor(public router: Router) { }

  ngOnInit() {
    this.selectedOptions[0] = this.resourceBoards[0]
  }

  public onSelectionChange() {
    this.router.navigate(['/resource', this.selectedOptions[0].id]);
  }

  public deleteResourceBoard(event: any, id: string) {
    event.stopPropagation()

    this.deleteResourceBoardEvent.emit(id)
  }

}
