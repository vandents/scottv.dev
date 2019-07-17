import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewImageDialogComponent } from '../view-image-dialog/view-image-dialog.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  screenWidth: number;

  constructor(private title: Title, public router: Router, private dialog: MatDialog) {
    this.title.setTitle('Scott VandenToorn - Home');
    this.getScreenSize();
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
  }

  openViewImageDialog(imageSource: string) {
    const dialogRef = this.dialog.open(
      ViewImageDialogComponent, {
        maxWidth: '600px',
        data: {
          imgSrc: imageSource
        }
      }
    );
  }

}
