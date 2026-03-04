import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

/**
 * Open a mat-menu on hover (desktop mouse) while letting matMenuTriggerFor
 * handle click, tap, and keyboard natively.
 *
 * Uses PointerEvent.pointerType to distinguish mouse from touch so hover
 * logic never fires on iOS Safari.
 * No platform detection → no SSR/hydration issues.
 */
@Component({
  standalone: false,
  selector: 'app-menu-auto-open',
  templateUrl: './menu-auto-open.component.html',
  styleUrl: './menu-auto-open.component.scss'
})
export class MenuAutoOpenComponent {

  private closeTimeout: number;

  onPointerEnter(event: PointerEvent, trigger: MatMenuTrigger) {
    if (event.pointerType !== 'mouse') return;
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = -1;
    }
    trigger.openMenu();
  }

  onPointerLeave(event: PointerEvent, trigger: MatMenuTrigger) {
    if (event.pointerType !== 'mouse') return;
    this.closeTimeout = +setTimeout(() => trigger.closeMenu(), 50);
  }

}
