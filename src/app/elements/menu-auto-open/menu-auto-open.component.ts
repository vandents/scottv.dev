import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

/**
 * Component to open a mat menu on hover (desktop) and click/tap (touch & keyboard).
 *
 * - Desktop: mouseenter/mouseleave handle open/close.
 * - Touch (iOS Safari): click toggles the menu. A time guard prevents the
 *   double-toggle caused by iOS firing both mouseenter and click from a single tap.
 * - Keyboard: Enter/Space fire a click event which toggles the menu.
 * - An inner wrapper div calls stopPropagation so matMenuTriggerFor's built-in
 *   click handler never fires (we manage toggling ourselves).
 */
@Component({
  standalone: false,
  selector: 'app-menu-auto-open',
  templateUrl: './menu-auto-open.component.html',
  styleUrl: './menu-auto-open.component.scss'
})
export class MenuAutoOpenComponent {

  timeoutId: number;
  private lastOpenTime = 0;

  mouseEnter(trigger: MatMenuTrigger) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = -1;
    }
    if (!trigger.menuOpen) {
      trigger.openMenu();
      this.lastOpenTime = Date.now();
    }
  }

  mouseLeave(trigger: MatMenuTrigger) {
    this.timeoutId = +setTimeout(() => {
      trigger.closeMenu();
    }, 50);
  }

  /** Click/tap handler on the inner wrapper. Stops propagation to prevent
   *  matMenuTriggerFor's click from conflicting, and toggles the menu. */
  onTriggerClick(event: Event, trigger: MatMenuTrigger) {
    event.stopPropagation();
    // If mouseenter just opened the menu (< 300 ms ago), skip the click.
    // This prevents iOS Safari's tap from opening then immediately closing.
    if (Date.now() - this.lastOpenTime < 300) return;

    if (trigger.menuOpen) {
      trigger.closeMenu();
    } else {
      trigger.openMenu();
      this.lastOpenTime = Date.now();
    }
  }

}
