import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

/**
 * Component to automatically open a mat menu on hover
 */
@Component({
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

}
