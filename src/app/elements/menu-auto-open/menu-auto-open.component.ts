import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatMenuTrigger } from '@angular/material/menu';

/**
 * Component to automatically open a mat menu on hover (desktop) or click/tap (touch/keyboard).
 *
 * Desktop hover: mouseenter opens, mouseleave closes.
 * Touch & keyboard: matMenuTriggerFor handles click-to-toggle natively.
 * The (hover: hover) media query prevents hover handlers from interfering on touch devices.
 */
@Component({
  standalone: false,
  selector: 'app-menu-auto-open',
  templateUrl: './menu-auto-open.component.html',
  styleUrl: './menu-auto-open.component.scss'
})
export class MenuAutoOpenComponent {

  timeoutId: number;

  /** True on devices with a fine pointer / hover capability (not iOS Safari touch) */
  supportsHover = false;

  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.supportsHover = window.matchMedia('(hover: hover)').matches;
    }
  }

  mouseEnter(trigger: MatMenuTrigger) {
    if (!this.supportsHover) return;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = -1;
    }
    trigger.openMenu();
  }

  mouseLeave(trigger: MatMenuTrigger) {
    if (!this.supportsHover) return;
    this.timeoutId = +setTimeout(() => {
      trigger.closeMenu();
    }, 50);
  }

}
