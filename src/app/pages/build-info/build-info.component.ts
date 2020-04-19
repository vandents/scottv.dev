import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VERSION } from '../../../environments/version';

export interface Dependency {
  name: string;
  link: string;
  version: string;
  iconPackage: string;
  icon: string;
}

/** Page for displaying build and dependency info */
@Component({
  selector: 'app-build-info',
  templateUrl: './build-info.component.html',
  styleUrls: ['./build-info.component.css']
})
export class BuildInfoComponent {
  dependencies: Dependency[];
  buildInfo: Dependency[];

  constructor(private title: Title) {
    this.title.setTitle('Scott VandenToorn - Build Info');

    this.dependencies = [
      { name: 'Angular', version: require('@angular/core/package.json').version, link: 'https://www.npmjs.com/package/@angular/core', iconPackage: 'fab', icon: 'angular' },
      { name: 'Angular Material', version: require('@angular/material/package.json').version, link: 'https://www.npmjs.com/package/@angular/material', iconPackage: 'fab', icon: 'angular' },
      { name: 'Angular Font Awesome', version: '4.7.0', link: 'https://www.fontawesome.com', iconPackage: 'fab', icon: 'font-awesome' },
      { name: 'Bootstrap', version: '4.1.3', link: 'https://www.bootstrap.com', iconPackage: 'fas', icon: 'bold' },
      { name: 'RxJS', version: require('rxjs/package.json').version, link: 'https://www.npmjs.com/package/rxjs', iconPackage: 'fab', icon: 'js' },
      { name: 'TypeScript', version: require('typescript/package.json').version, link: 'https://www.npmjs.com/package/typescript', iconPackage: 'fas', icon: 'code' }
    ];

    this.buildInfo = [
      { name: 'Date', version: VERSION.date, link: '', iconPackage: 'fas', icon: 'calendar' },
      { name: 'Hash', version: VERSION.hash, link: `https://github.com/vandents/scottv.dev/commit/${VERSION.hash}`, iconPackage: 'fas', icon: 'hashtag' }
    ];
  }

  onLinkClick(e: MouseEvent, link: string) {
    if (!link) e.preventDefault();
  }

}
