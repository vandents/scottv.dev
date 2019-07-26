import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserService } from '../services/browser-service/browser.service';

/** The navigation bar at the top of the screen */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  myEmail = 'vandents@mail.gvsu.edu';

  constructor(
    public router: Router,
    private snackBar: MatSnackBar,
    public browser: BrowserService
  ) { }

  ngOnInit() {
  }

  copyToClipboard(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.openSnackBar(`Copied ${val}`);
  }

  openSnackBar(message: string, action = 'Dismiss') {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
