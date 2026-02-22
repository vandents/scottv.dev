import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/** Dialog for expanding an image on the project page */
@Component({
  standalone: false,
  selector: 'app-view-image-dialog',
  templateUrl: './view-image-dialog.component.html',
  styleUrls: ['./view-image-dialog.component.scss']
})
export class ViewImageDialogComponent {
  imgSrc: string;
  public dialogRef = inject(MatDialogRef<ViewImageDialogComponent>);
  public data: any = inject(MAT_DIALOG_DATA);

  constructor() {
    this.imgSrc = this.data.imgSrc;
  }

}
