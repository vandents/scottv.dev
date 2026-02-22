import { Component, OnInit } from '@angular/core';

/** It's at the bottom yo */
@Component({
  standalone: false,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentDate: Date = new Date();

  constructor() { }

  ngOnInit() {
    this.currentDate = new Date();
  }

}
