import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { BrowserService } from '@services/browser-service/browser.service';
import { SharedModule } from '@app/shared.module';


/** Home page */
@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  constructor(
    private title: Title,
    private snackBar: MatSnackBar,
    public browser: BrowserService
  ) {
    this.title.setTitle('Scott VandenToorn - Home');
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
  }


  copyEmail() {
    navigator.clipboard.writeText('scottvandentoorn@gmail.com');
    this.openSnackBar('Email copied to clipboard');
  }

  openSnackBar(message: string, action = 'Dismiss') {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
