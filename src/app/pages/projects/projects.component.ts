import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewImageDialogComponent } from '@dialogs/view-image-dialog/view-image-dialog.component';
import { BrowserService } from '@services/browser-service/browser.service';
import { SharedModule } from '@app/shared.module';


/** Projects page */
@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  constructor(
    private title: Title,
    public router: Router,
    private dialog: MatDialog,
    public browser: BrowserService
  ) {
    this.title.setTitle('Scott VandenToorn - Portfolio');
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
  }


  openViewImageDialog(imageSource: string, isLandscape = false) {
    if (!this.browser.isScreen650()) return;

    const maxWidth = isLandscape ? '1200px' : '650px';

    this.dialog.open(
      ViewImageDialogComponent, {
        maxWidth,
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
