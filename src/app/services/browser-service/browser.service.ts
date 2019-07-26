import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DeviceDetectorService } from 'ngx-device-detector';

/** Service for the detecting browser width and type */
@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  constructor(private platform: Platform, private deviceServ: DeviceDetectorService) { }

  /*****************************************
   * Screen size
   *****************************************/

  /** @returns {boolean} true if screen width is bigger than 992px */
  isScreenLarge(): boolean {
    if (this.platform.width() >= 992) return true;
    return false;
  }

  /** @returns {boolean} true if screen width is bigger than 650px */
  isScreenMedium(): boolean {
    if (this.platform.width() > 650) return true;
    return false;
  }

  /** @returns {boolean} true if screen width is bigger than 400px */
  isScreenSmall(): boolean {
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
