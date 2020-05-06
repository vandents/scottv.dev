import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { BrowserService } from '@services/browser-service/browser.service';


/** Home page */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private title: Title,
    private snackBar: MatSnackBar,
    public browser: BrowserService
  ) {
    this.title.setTitle('Scott VandenToorn - Home');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }


  openSnackBar(message: string, action = 'Dismiss') {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
