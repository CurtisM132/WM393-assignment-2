import { Component, EventEmitter, Output } from '@angular/core';
import { FileHandle } from './drag-and-drop-file.directive';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  @Output() filesDropped: EventEmitter<FileHandle[]> = new EventEmitter();

  constructor() { }

  public handleFilesDropped(files: FileHandle[]): void {
    this.filesDropped.emit(files)
  }
}
