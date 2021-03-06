import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-resource-board-input',
  templateUrl: './create-resource-board-input.component.html',
  styleUrls: ['./create-resource-board-input.component.css']
})
export class CreateResourceBoardInputComponent {

  @Output() createResourceBoardEvent = new EventEmitter<string>();

  public resourceBoardName = '';

  constructor() { }

  public createResourceBoard(): void {
    this.createResourceBoardEvent.emit(this.resourceBoardName);
  }

}
