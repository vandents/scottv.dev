import { Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from '@services/theme-service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  @HostBinding('class') componentCssClass: any;

  constructor(
    public overlayContainer : OverlayContainer,
    public themeService: ThemeService
  ) { }

  ngOnInit() {
    this.setTheme(this.themeService.getSaved());
  }

  setTheme(theme: any) {
    this.overlayContainer.getContainerElement().classList.forEach((v,k,p)=> {
      if (v.endsWith('theme')) {
        p.replace(v,theme);
        return;
      }
    })
    document.documentElement.classList.remove(this.themeService.getTheme())
    document.documentElement.classList.add(theme);
    this.componentCssClass = theme;
    this.themeService.set(theme);
  }

}
