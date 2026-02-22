import { Component, HostBinding, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService, ThemeType } from '@services/theme-service/theme.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  @HostBinding('class') componentCssClass: any;
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor(
    public overlayContainer : OverlayContainer,
    public themeService: ThemeService
  ) { }

  ngOnInit() {
    if (this.isBrowser) {
      // Update theme if device theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event =>
        this.setTheme(event.matches ? ThemeType.Dark : ThemeType.Light)
      );
    }

    this.setTheme(this.themeService.getSaved());
  }

  setTheme(theme: any) {
    if (this.isBrowser) {
      this.overlayContainer.getContainerElement().classList.forEach((v,k,p)=> {
        if (v.endsWith('theme')) {
          p.replace(v,theme);
          return;
        }
      })
      document.documentElement.classList.remove(this.themeService.getTheme())
      document.documentElement.classList.add(theme);
    }
    this.componentCssClass = theme;
    this.themeService.set(theme);
  }

}
