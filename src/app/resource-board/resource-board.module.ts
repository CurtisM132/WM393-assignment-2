import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { ResourceBoardPageComponent } from './page/resource-board-page.component';
import { ResourceBoardDisplayListComponent } from './board/display-list/resource-board-display-list.component';
import { CreateResourceBoardInputComponent } from './board/create-resource-board-input/create-resource-board-input.component';
import { AbstractResourceBoardService } from './board/shared/resource-board.abstract-service';
import { MockResourceBoardService } from './board/shared/resource-board.mock.service';
import { ResourceTableComponent } from './resource/resource-table/resource-table.component';
import { AppRoutingModule } from '../app-routing.module';
import { AbstractResourceService } from './resource/shared/resource.abstract-service';
import { MockResourceService } from './resource/shared/resource.mock.service';

@NgModule({
  declarations: [
    ResourceBoardPageComponent,
    ResourceBoardDisplayListComponent,
    CreateResourceBoardInputComponent,
    ResourceTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [
    ResourceBoardPageComponent
  ],
  providers: [
    { provide: AbstractResourceBoardService, useClass: MockResourceBoardService },
    { provide: AbstractResourceService, useClass: MockResourceService },
  ]
})
export class ResourceBoardModule { }
