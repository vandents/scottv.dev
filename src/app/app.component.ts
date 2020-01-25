import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserService } from './services/browser-service/browser.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  widthSub: Subscription;
  containerClass: string;

  constructor(
    private router: Router,
    private browser: BrowserService
  ) {
    this.containerClass = this.browser.isScreen500() ?
      'container' : 'thin-container';
  }

  ngOnInit() {
    // Apply thin container when viewing algorithms on mobile
    this.widthSub = this.browser.widthChanges.subscribe(width => {
      if (width <= 500 && this.router.url.includes('algorithms')) this.containerClass = 'thin-container';
      else this.containerClass = 'container';
    });
  }

  ngOnDestroy() {
    this.widthSub.unsubscribe();
  }

}
