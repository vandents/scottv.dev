import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { ViewImageDialogComponent } from '@dialogs/view-image-dialog/view-image-dialog.component';
import { BrowserService } from '@services/browser-service/browser.service';
import { SharedModule } from '@app/shared.module';
import { IMAGE_MANIFEST } from './image-manifest';


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
  private overlay = inject(Overlay);

  readonly images = IMAGE_MANIFEST;

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
        scrollStrategy: this.overlay.scrollStrategies.noop(),
        data: {
          imgSrc: imageSource
        }
      }
    );
  }

  openImageGallery(images: readonly string[], startIndex = 0, isLandscape = false) {
    if (!this.browser.isScreen650()) return;

    const maxWidth = isLandscape ? '1200px' : '650px';

    this.dialog.open(
      ViewImageDialogComponent, {
        maxWidth,
        scrollStrategy: this.overlay.scrollStrategies.noop(),
        data: {
          imgSrcs: images,
          startIndex
        }
      }
    );
  }

  getTooltip(): string {
    return this.browser.isScreen650() ? 'Click to enlarge' : '';
  }

}
