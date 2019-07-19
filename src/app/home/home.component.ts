import { Component, OnInit, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  screenWidth: number;
  chrome: any;
  safari: any;

  constructor(private title: Title, private snackBar: MatSnackBar) {
    this.title.setTitle('Scott VandenToorn - Home');
    this.getScreenSize();
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.chrome = navigator.userAgent.indexOf('Chrome') > -1;
    this.safari = navigator.userAgent.indexOf('Safari') > -1;
    if ((this.chrome) && (this.safari)) this.safari = false;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
  }

  isSmallPhone() {
    if (this.screenWidth > 400) return false;
    return true;
  }

  openSnackBar(message: string, action = 'Dismiss') {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
