import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

import { FileHandle } from './file-upload.component';


@Directive({
  selector: '[appDragAndDropFile]'
})
export class DragAndDropFileDirective {

  @Output() filesDroppedEvent: EventEmitter<FileHandle[]> = new EventEmitter();

  @HostBinding("style.opacity") private opacity = "0";
  @HostBinding("style.pointerEvents") private pointerEvents = "all";

  constructor() { }

  @HostListener("dragover", ["$event"]) public onDragOver(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
    // Darken the background when a file is dragged over it
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

    // Format dropped files to a useable datatype the emit
    if (evt.dataTransfer) {
      let files: FileHandle[] = [];
      for (let i = 0; i < evt.dataTransfer.files.length; i++) {
        const file = evt.dataTransfer.files[i];
        // Get a file path for the uploaded file so it can be re-downloaded
        const plainURI = window.URL.createObjectURL(file)
        files.push({ file, plainURI });
      }
      if (files.length > 0) {
        this.filesDroppedEvent.emit(files);
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
