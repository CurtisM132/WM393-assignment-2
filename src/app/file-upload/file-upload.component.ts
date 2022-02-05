import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';


export interface FileHandle {
  file: File,
  plainURI: string
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  @Input() displayUploadButton?: boolean = false;

  @Output() filesDropped: EventEmitter<FileHandle[]> = new EventEmitter();

  @ViewChild('FileSelectInputDialog') FileSelectInputDialog: ElementRef;

  constructor() { }

  public handleFilesDropped(files: FileHandle[]): void {
    this.filesDropped.emit(files)
  }

  public handleUploadClick(): void {
    // Simulate a click event on the file input to open the file picker/browser
    const e: HTMLElement = this.FileSelectInputDialog.nativeElement;
    e.click();
  }

  public handleFileInput(event: any): void {
    // Format dropped files to a useable datatype
    if (event.target.files) {
      let files: FileHandle[] = [];
      for (let i = 0; i < event.target.files.length; i++) {
        const file = event.target.files[i];
        // Get a file path for the uploaded file so it can be re-downloaded
        const plainURI = window.URL.createObjectURL(file)
        files.push({ file, plainURI });
      }
      if (files.length > 0) {
        this.filesDropped.emit(files);
      }
    }
  }
}
