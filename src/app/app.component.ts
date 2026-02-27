import { ChangeDetectorRef, Component, HostBinding, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService, ThemeType } from '@services/theme-service/theme.service';
import { BrowserService } from '@services/browser-service/browser.service';

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
    public overlayContainer: OverlayContainer,
    public themeService: ThemeService,
    private browserService: BrowserService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (this.isBrowser) {
      // Update theme if device theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event =>
        this.setTheme(event.matches ? ThemeType.Dark : ThemeType.Light)
      );
      this.setTheme(this.themeService.getSaved());

      // Trigger change detection on window width changes
      this.browserService.widthChanges.subscribe(() => this.cdr.detectChanges());
    } else {
      // On server, set service state but don't bind a class to app-root.
      // The root-level theme.scss already provides light theme styles.
      // Binding 'light-theme' here would bake it into the prerendered HTML,
      // causing it to override dark/black theme classes on <html> after refresh.
      this.themeService.set(this.themeService.getSaved() as ThemeType);
    }
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
