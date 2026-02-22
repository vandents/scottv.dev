import { Directive, ElementRef, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Directive that applies the lazy loading strategy to all images except
 * those that are displayed inside a carousel
 */
@Directive({ standalone: false, selector: 'img' })
export class LazyImgDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;

    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports && !nativeElement.classList.contains('d-block') && !nativeElement.classList.contains('un-lazy')) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
}
