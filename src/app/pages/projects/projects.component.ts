import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewImageDialogComponent } from '@dialogs/view-image-dialog/view-image-dialog.component';
import { BrowserService } from '@services/browser-service/browser.service';


/** Projects page */
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private title: Title,
    public router: Router,
    private dialog: MatDialog,
    public browser: BrowserService
  ) {
    this.title.setTitle('Scott VandenToorn - Portfolio');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }


  openViewImageDialog(imageSource: string) {
    this.dialog.open(
      ViewImageDialogComponent, {
        maxWidth: '600px',
        data: {
          imgSrc: imageSource
        }
      }
    );
  }

  getTooltip(): string {
    return this.browser.isScreen650() ? 'Click to enlarge' : '';
  }

}
