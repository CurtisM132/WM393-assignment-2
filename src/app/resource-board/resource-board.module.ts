import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { ResourceBoardPageComponent } from './page/resource-board-page.component';
import { ResourceBoardDisplayListComponent } from './display-list/resource-board-display-list.component';
import { CreateResourceBoardInputComponent } from './create-resource-board-input/create-resource-board-input.component';
import { AbstractResourceBoardService } from './shared/resource-board.abstract-service';
import { MockResourceBoardService } from './shared/resource-board.mock.service';

@NgModule({
  declarations: [
    ResourceBoardPageComponent,
    ResourceBoardDisplayListComponent,
    CreateResourceBoardInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    ResourceBoardPageComponent
  ],
  providers: [
    { provide: AbstractResourceBoardService, useClass: MockResourceBoardService },
  ]
})
export class ResourceBoardModule { }
