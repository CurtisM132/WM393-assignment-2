import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { ResourceBoardPageComponent } from './resource-board-page/resource-board-page.component';

@NgModule({
  declarations: [
    ResourceBoardPageComponent
  ],
  imports: [
    FormsModule,
    MaterialModule
  ],
  exports: [
    ResourceBoardPageComponent
  ],
  providers: []
})
export class ResourceBoardModule { }
