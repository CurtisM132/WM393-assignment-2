import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { ResourceBoardPageComponent } from './resource-board-page/resource-board-page.component';
import { AbstractResourceBoardService } from './shared/resource-board.abstract-service';
import { MockResourceBoardService } from './shared/resource-board.mock.service';

@NgModule({
  declarations: [
    ResourceBoardPageComponent
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
