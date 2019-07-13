import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  openSnackBar(message: string, action = 'Dismiss') {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
