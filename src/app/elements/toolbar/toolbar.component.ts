import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserService } from '@services/browser-service/browser.service';

/** The navigation bar at the top of the screen */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  emailAddress: string;

  constructor(
    public router: Router,
    private snackBar: MatSnackBar,
    public browser: BrowserService
  ) {
    this.emailAddress = 'vandents@mail.gvsu.edu';
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
