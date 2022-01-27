import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { FileUploadComponent } from './file-upload.component';
import { DragAndDropFileDirective } from './drag-and-drop-file.directive';

@NgModule({
  declarations: [
    DragAndDropFileDirective,
    FileUploadComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    FileUploadComponent
  ]
})
export class FileUploadModule { }
