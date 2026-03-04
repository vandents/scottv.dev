import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

/**
 * Component to automatically open a mat menu on hover.
 * Uses mouseenter/mouseleave for desktop and click to toggle for touch devices (iOS Safari).
 */
@Component({
  standalone: false,
  selector: 'app-menu-auto-open',
  templateUrl: './menu-auto-open.component.html',
  styleUrl: './menu-auto-open.component.scss'
})
export class MenuAutoOpenComponent {

  timeoutId: number;

  mouseEnter(trigger: MatMenuTrigger) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = -1;
    }
    trigger.openMenu();
  }

  mouseLeave(trigger: MatMenuTrigger) {
    this.timeoutId = +setTimeout(() => {
      trigger.closeMenu();
    }, 50);
  }

  /** Toggle menu on click/tap — needed for touch devices where hover events are unreliable */
  toggleMenu(trigger: MatMenuTrigger) {
    if (trigger.menuOpen) {
      trigger.closeMenu();
    } else {
      trigger.openMenu();
    }
  }

}
