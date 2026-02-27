import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


/** Service for the detecting browser width and type */
@Injectable({
  providedIn: 'root'
})
export class BrowserService {
  public widthChanges = new Subject<number>();
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private _width: number;


  constructor(private deviceServ: DeviceDetectorService) {
    this._width = this.isBrowser ? window.innerWidth : 1024;

    if (this.isBrowser) {
      // debounceTime limits to one event per 100ms, so CD frequency
      // is already controlled. The cached _width prevents
      // ExpressionChangedAfterItHasBeenCheckedError.
      fromEvent(window, 'resize')
        .pipe(debounceTime(16))
        .subscribe((event: any) => {
          this._width = event.target.innerWidth;
          this.widthChanges.next(this._width);
        });
    }
  }


  /*****************************************
   * Screen size
   *****************************************/

  /** @returns {boolean} true if screen width is bigger than 992px */
  isScreen992(): boolean {
    return this._width >= 992;
  }

  /** @returns {boolean} true if screen width is bigger than 767px */
  isScreen767(): boolean {
    return this._width > 767;
  }

  /** @returns {boolean} true if screen width is bigger than 650px */
  isScreen650(): boolean {
    return this._width > 650;
  }

  /** @returns {boolean} true if screen width is bigger than 500px */
  isScreen500(): boolean {
    return this._width > 500;
  }

  /** @returns {boolean} true if screen width is bigger than 440px */
  isScreen440(): boolean {
    return this._width > 440;
  }

  /** @returns {boolean} true if screen width is bigger than 400px */
  isScreen400(): boolean {
    return this._width > 400;
  }


  /*****************************************
   * Browser Type
   *****************************************/

  /** @returns {boolean} true if browser is Safari */
  isSafari(): boolean {
    return this.deviceServ.browser().toLowerCase() === 'safari';
  }

  /** @returns {boolean} true if browser is Instagram */
  isInstagram(): boolean {
    return this.deviceServ.browser().toLowerCase() === 'instagram';
  }

}
