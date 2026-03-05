import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

/**
 * Open a mat-menu on hover (desktop mouse) while letting matMenuTriggerFor
 * handle click, tap, and keyboard natively.
 *
 * Uses PointerEvent.pointerType to distinguish mouse from touch so hover
 * logic never fires on iOS Safari.
 *
 * Backdrop is disabled to avoid interfering with hover pointer events.
 * HostListener on document:click and document:touchend closes the menu
 * when tapping/clicking outside the trigger or menu panel.
 */
@Component({
  standalone: false,
  selector: 'app-menu-auto-open',
  templateUrl: './menu-auto-open.component.html',
  styleUrl: './menu-auto-open.component.scss'
})
export class MenuAutoOpenComponent {

  @ViewChild('menuTrigger') private menuTrigger: MatMenuTrigger;

  private closeTimeout: number;

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchend', ['$event'])
  onDocumentEvent(event: Event) {
    if (!this.menuTrigger?.menuOpen) return;

    const target = event.target as HTMLElement;
    if (!target) return;

    // Tap/click inside the component host (trigger area) → ignore
    if (this.el.nativeElement.contains(target)) return;

    // Tap/click inside the CDK overlay (menu panel) → ignore
    const overlay = document.querySelector('.cdk-overlay-container');
    if (overlay?.contains(target)) return;

    // Outside tap/click → close
    this.menuTrigger.closeMenu();
  }

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
