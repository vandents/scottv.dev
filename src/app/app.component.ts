import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  widthSub: Subscription;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.widthSub.unsubscribe();
  }

}
