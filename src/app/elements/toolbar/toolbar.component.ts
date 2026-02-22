import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserService } from '@services/browser-service/browser.service';
import { AppComponent } from '@app/app.component';
import { ThemeService, ThemeType } from '@services/theme-service/theme.service';

/** The navigation bar at the top of the screen */
@Component({
  standalone: false,
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  emailAddress: string;
  ThemeType = ThemeType;

  constructor(
    public router: Router,
    private snackBar: MatSnackBar,
    public browser: BrowserService,
    public appComponent: AppComponent,
    public themeService: ThemeService
  ) {
    this.emailAddress = 'svandentoorn@gmail.com';
  }

  copyToClipboard(val: string) {
    const tempElement = document.createElement('textarea');
    tempElement.style.display = 'none';
    tempElement.value = val;
    document.body.appendChild(tempElement);
    tempElement.focus();
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);

    this.openSnackBar(`Copied ${val}`);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Dismiss', {
      duration: 2000,
    });
  }

}
