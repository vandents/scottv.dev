import { Injectable, EventEmitter, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import { fromEvent } from 'rxjs';


/** Service for the detecting browser width and type */
@Injectable({
  providedIn: 'root'
})
export class BrowserService {
  public widthChanges: EventEmitter<number>;
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));


  constructor(private deviceServ: DeviceDetectorService) {
    this.widthChanges = new EventEmitter<number>();

    if (this.isBrowser) {
      // Emit width change event when window resizes
      fromEvent(window, 'resize').subscribe((event: any) => {
        this.widthChanges.emit(event.target.innerWidth);
      });
    }
  }


  /*****************************************
   * Screen size
   *****************************************/

  /** @returns {boolean} true if screen width is bigger than 992px */
  isScreen992(): boolean {
    if (!this.isBrowser) return true;
    if (window.innerWidth >= 992) return true;
    return false;
  }

  /** @returns {boolean} true if screen width is bigger than 500px */
  isScreen767(): boolean {
    if (!this.isBrowser) return true;
    if (window.innerWidth > 767) return true;
    return false;
  }

  /** @returns {boolean} true if screen width is bigger than 650px */
  isScreen650(): boolean {
    if (!this.isBrowser) return true;
    if (window.innerWidth > 650) return true;
    return false;
  }

  /** @returns {boolean} true if screen width is bigger than 500px */
  isScreen500(): boolean {
    if (!this.isBrowser) return true;
    if (window.innerWidth > 500) return true;
    return false;
  }

  /** @returns {boolean} true if screen width is bigger than 400px */
  isScreen400(): boolean {
    if (!this.isBrowser) return true;
    if (window.innerWidth > 400) return true;
    return false;
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
