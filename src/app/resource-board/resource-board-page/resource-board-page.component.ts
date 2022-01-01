import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-board-page',
  templateUrl: './resource-board-page.component.html',
  styleUrls: ['./resource-board-page.component.css']
})
export class ResourceBoardPageComponent implements OnInit {

  public authenticated = true

  value = '';

  constructor() { }

  ngOnInit(): void {
  }

}
