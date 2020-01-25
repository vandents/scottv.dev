import { Injectable, Output, EventEmitter } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DeviceDetectorService } from 'ngx-device-detector';
import { fromEvent } from 'rxjs';

/** Service for the detecting browser width and type */
@Injectable({
  providedIn: 'root'
})
export class BrowserService {
  @Output() public widthChanges: EventEmitter<number>;


  constructor(
    private platform: Platform,
    private deviceServ: DeviceDetectorService
  ) {
    this.widthChanges = new EventEmitter<number>();

    // Emit width change event when window resizes
    fromEvent(window, 'resize').subscribe((event: any) => {
      this.widthChanges.emit(event.target.innerWidth);
    });
  }


  /*****************************************
   * Screen size
   *****************************************/

  /** @returns {boolean} true if screen width is bigger than 992px */
  isScreen992(): boolean {
    if (this.platform.width() >= 992) return true;
    return false;
  }

  /** @returns {boolean} true if screen width is bigger than 500px */
  isScreen767(): boolean {
    if (this.platform.width() > 767) return true;
    return false;
  }

  /** @returns {boolean} true if screen width is bigger than 650px */
  isScreen650(): boolean {
    if (this.platform.width() > 650) return true;
    return false;
  }

  /** @returns {boolean} true if screen width is bigger than 500px */
  isScreen500(): boolean {
    if (this.platform.width() > 500) return true;
    return false;
  }

  /** @returns {boolean} true if screen width is bigger than 400px */
  isScreen400(): boolean {
    if (this.platform.width() > 400) return true;
    return false;
  }


  /*****************************************
   * Browser Type
   *****************************************/

  /** @returns {boolean} true if browser is Safari */
  isSafari(): boolean {
    return this.deviceServ.browser.toLowerCase() === 'safari';
  }

  /** @returns {boolean} true if browser is Instagram */
  isInstagram(): boolean {
    return this.deviceServ.browser.toLowerCase() === 'instagram';
  }

  /** @returns {boolean} true if the masked icons on the home page will display correctly */
  maskWorks(): boolean {
    if (this.isSafari() || this.isInstagram()) return false;
    return true;
  }

}
