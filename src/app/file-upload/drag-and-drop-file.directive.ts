import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface FileHandle {
  file: File,
  url: SafeUrl
}

@Directive({
  selector: '[appDragAndDropFile]'
})
export class DragAndDropFileDirective {

  @Output() filesDropped: EventEmitter<FileHandle[]> = new EventEmitter();

  @HostBinding("style.opacity") private opacity = "0";

  constructor(private sanitizer: DomSanitizer) { }

  @HostListener("dragover", ["$event"]) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = "0.35";
  }

  @HostListener("dragleave", ["$event"]) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = "0";
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = '0';

    // Format dropped file to a useable datatype
    if (evt.dataTransfer) {
      let files: FileHandle[] = [];
      for (let i = 0; i < evt.dataTransfer.files.length; i++) {
        const file = evt.dataTransfer.files[i];
        const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
        files.push({ file, url });
      }
      if (files.length > 0) {
        this.filesDropped.emit(files);
      }
    }
  }

}
