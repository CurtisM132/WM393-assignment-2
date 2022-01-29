import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from './drag-and-drop-file.directive';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  @Input() displayUploadButton?: boolean = false;

  @Output() filesDropped: EventEmitter<FileHandle[]> = new EventEmitter();

  @ViewChild('FileSelectInputDialog') FileSelectInputDialog: ElementRef;

  constructor(private sanitizer: DomSanitizer) { }

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
        const plainUrl = window.URL.createObjectURL(file)
        const url = this.sanitizer.bypassSecurityTrustUrl(plainUrl);
        files.push({ file, url, plainUrl });
      }
      if (files.length > 0) {
        this.filesDropped.emit(files);
      }
    }
  }
}
