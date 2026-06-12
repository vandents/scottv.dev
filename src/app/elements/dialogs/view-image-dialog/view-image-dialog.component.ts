import { Component, HostListener, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/** Dialog for expanding an image on the project page */
@Component({
  standalone: false,
  selector: 'app-view-image-dialog',
  templateUrl: './view-image-dialog.component.html',
  styleUrls: ['./view-image-dialog.component.scss']
})
export class ViewImageDialogComponent {
  imgSrcs: string[];
  currentIndex: number;
  public dialogRef = inject(MatDialogRef<ViewImageDialogComponent>);
  public data: any = inject(MAT_DIALOG_DATA);

  constructor() {
    this.imgSrcs = Array.isArray(this.data.imgSrcs)
      ? this.data.imgSrcs
      : [this.data.imgSrc];
    this.currentIndex = this.data.startIndex ?? 0;
  }

  get currentSrc(): string {
    return this.imgSrcs[this.currentIndex];
  }

  get hasMultiple(): boolean {
    return this.imgSrcs.length > 1;
  }

  next(event?: Event) {
    event?.stopPropagation();
    this.currentIndex = (this.currentIndex + 1) % this.imgSrcs.length;
  }

  prev(event?: Event) {
    event?.stopPropagation();
    this.currentIndex =
      (this.currentIndex - 1 + this.imgSrcs.length) % this.imgSrcs.length;
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight() {
    if (this.hasMultiple) this.next();
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft() {
    if (this.hasMultiple) this.prev();
  }
}
