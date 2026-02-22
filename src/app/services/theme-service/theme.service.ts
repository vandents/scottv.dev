import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';

export enum ThemeType {
  Light = 'light-theme',
  Dark  = 'dark-theme',
  Black = 'black-theme'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeType: ThemeType;
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor(public meta: Meta) { }

  set(theme: ThemeType) {
    if (theme == ThemeType.Light) {
      this.themeType = theme;
      this.meta.updateTag({name: 'theme-color', content: "#f5f5f5"});
    } else if (theme == ThemeType.Dark) {
      this.themeType = theme;
      this.meta.updateTag({name: 'theme-color', content: "#26292f"});
    } else if (theme == ThemeType.Black) {
      this.themeType = theme;
      this.meta.updateTag({name: 'theme-color', content: "#000000"});
    }
    if (this.isBrowser) localStorage.setItem('theme', theme);
  }

  getSaved(): string {
    if (this.isBrowser) {
      let theme = localStorage.getItem('theme');
      if (theme == ThemeType.Light ||
          theme == ThemeType.Dark ||
          theme == ThemeType.Black)
        return theme;
      else localStorage.removeItem('theme');

      // Default to device theme
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
        return ThemeType.Dark;
    }
    return ThemeType.Light;
  }

  isLight(): boolean {
    return this.themeType == ThemeType.Light;
  }

  isDark(): boolean {
    return this.themeType == ThemeType.Dark;
  }

  isBlack(): boolean {
    return this.themeType == ThemeType.Black;
  }

  getTheme(): ThemeType {
    return this.themeType;
  }

}
