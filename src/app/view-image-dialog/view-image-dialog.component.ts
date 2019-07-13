import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-image-dialog',
  templateUrl: './view-image-dialog.component.html',
  styleUrls: ['./view-image-dialog.component.css']
})
export class ViewImageDialogComponent implements OnInit {
  imgSrc: string;
  screenWidth: number;

  constructor(
    public dialogRef: MatDialogRef<ViewImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.imgSrc = data.imgSrc;
    this.getScreenSize();
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
