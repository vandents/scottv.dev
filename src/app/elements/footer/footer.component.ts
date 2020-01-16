import { Component, OnInit } from '@angular/core';

/** It's at the bottom yo */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentDate: Date;

  constructor() { }

  ngOnInit() {
    this.currentDate = new Date();
  }

}
