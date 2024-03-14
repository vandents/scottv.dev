import { Directive, ElementRef } from '@angular/core';

/**
 * Directive that applies the lazy loading strategy to all images except
 * those that are displayed inside a carousel
 */
@Directive({ selector: 'img' })
export class LazyImgDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports && !nativeElement.classList.contains('d-block') && !nativeElement.classList.contains('un-lazy')) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
}
