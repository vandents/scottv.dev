import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chrome: any;
  safari: any;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.chrome = navigator.userAgent.indexOf('Chrome') > -1;
    this.safari = navigator.userAgent.indexOf('Safari') > -1;
    if ((this.chrome) && (this.safari)) this.safari = false;
  }

  openSnackBar(message: string, action = 'Dismiss') {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
