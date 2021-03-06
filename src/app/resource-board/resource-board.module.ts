import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';

import { environment } from 'src/environments/environment';

import { FileUploadModule } from '../file-upload/file-upload.module';

import { ResourceBoardPageComponent } from './page/resource-board-page.component';
import { ResourceBoardDisplayListComponent } from './board/display-list/resource-board-display-list.component';
import { CreateResourceBoardInputComponent } from './board/create-resource-board-input/create-resource-board-input.component';
import { ResourceTableComponent } from './resource/resource-table/resource-table.component';
import { ResourcesContainerComponent } from './resource/resources-container/resources-container.component';
import { DisplayResourceComponent } from './resource/display-resource/display-resource.component';


@NgModule({
  declarations: [
    ResourceBoardPageComponent,
    ResourceBoardDisplayListComponent,
    CreateResourceBoardInputComponent,
    ResourcesContainerComponent,
    ResourceTableComponent,
    DisplayResourceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    FileUploadModule,
  ],
  exports: [
    ResourceBoardPageComponent,
  ],
  providers: [
    ...environment.providers,
  ]
})
export class ResourceBoardModule { }
