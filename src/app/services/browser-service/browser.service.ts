import { Injectable, EventEmitter } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { fromEvent } from 'rxjs';


/** Service for the detecting browser width and type */
@Injectable({
  providedIn: 'root'
})
export class BrowserService {
  public widthChanges: EventEmitter<number>;


  constructor(private deviceServ: DeviceDetectorService) {
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
    if (window.innerWidth >= 992) return true;
    return false;
  }

  /** @returns {boolean} true if screen width is bigger than 500px */
  isScreen767(): boolean {
    if (window.innerWidth > 767) return true;
    return false;
  }

  /** @returns {boolean} true if screen width is bigger than 650px */
  isScreen650(): boolean {
    if (window.innerWidth > 650) return true;
    return false;
  }

  /** @returns {boolean} true if screen width is bigger than 500px */
  isScreen500(): boolean {
    if (window.innerWidth > 500) return true;
    return false;
  }

  /** @returns {boolean} true if screen width is bigger than 400px */
  isScreen400(): boolean {
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
