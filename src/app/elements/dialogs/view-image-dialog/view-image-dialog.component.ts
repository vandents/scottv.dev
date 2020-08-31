import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/** Dialog for expanding an image on the project page */
@Component({
  selector: 'app-view-image-dialog',
  templateUrl: './view-image-dialog.component.html',
  styleUrls: ['./view-image-dialog.component.scss']
})
export class ViewImageDialogComponent implements OnInit {
  imgSrc: string;

  constructor(
    public dialogRef: MatDialogRef<ViewImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.imgSrc = data.imgSrc;
  }

  ngOnInit() {
  }

}
