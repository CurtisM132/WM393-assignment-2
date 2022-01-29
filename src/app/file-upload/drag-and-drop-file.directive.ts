import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface FileHandle {
  file: File,
  url: SafeUrl
  plainUrl: string
}

@Directive({
  selector: '[appDragAndDropFile]'
})
export class DragAndDropFileDirective {

  @Output() filesDropped: EventEmitter<FileHandle[]> = new EventEmitter();

  @HostBinding("style.opacity") private opacity = "0";
  @HostBinding("style.pointerEvents") private pointerEvents = "all";

  constructor(private sanitizer: DomSanitizer) { }

  @HostListener("dragover", ["$event"]) public onDragOver(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = "0.35";
  }

  @HostListener("dragleave", ["$event"]) public onDragLeave(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = "0";
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = '0';

    // Format dropped files to a useable datatype
    if (evt.dataTransfer) {
      let files: FileHandle[] = [];
      for (let i = 0; i < evt.dataTransfer.files.length; i++) {
        const file = evt.dataTransfer.files[i];
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

  // Due to this directive being used on a overlay component we need to be able to pass through certain pointer events to components beneath
  // To do this we disable pointer events (CSS: pointer-events: none;) for a 1 second duration so all the pointers events are ignored by this component and passed through
  // When the events we want (see host listeners above) are triggered they leave the pointer-events CSS set to all so this directive can bind to them 
  @HostListener("mousemove", ["$event"]) public onMouseMove(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();

    this.pointerEvents = "none";

    setTimeout(() => {
      this.pointerEvents = "all";
    }, 1000);
  }

}
