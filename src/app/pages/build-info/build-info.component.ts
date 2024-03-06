import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VERSION } from '../../../environments/version';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
declare var require: any;
import * as core from '@angular/core';
import * as fire from '@angular/fire';
import * as ts from 'typescript';


export interface Dependency {
  name: string;
  link: string;
  version: string;
  iconPackage: IconPrefix;
  icon: IconName;
}


/** Page for displaying build and dependency info */
@Component({
  selector: 'app-build-info',
  templateUrl: './build-info.component.html',
  styleUrls: ['./build-info.component.scss']
})
export class BuildInfoComponent {
  dependencies: Dependency[];
  buildInfo: Dependency[];


  constructor(private title: Title) {
    this.title.setTitle('Scott VandenToorn - Build Info');

    this.dependencies = [
      { name: 'Angular', version: core.VERSION.full, link: 'https://www.npmjs.com/package/@angular/core', iconPackage: 'fab', icon: 'angular' },
      { name: 'Angular Fire', version: fire.VERSION.full, link: 'https://www.npmjs.com/package/@angular/fire', iconPackage: 'fab', icon: 'angular' },
      { name: 'Angular Material', version: core.VERSION.full, link: 'https://www.npmjs.com/package/@angular/material', iconPackage: 'fab', icon: 'angular' },
      { name: 'Angular Font Awesome', version: '6.5.1', link: 'https://www.fontawesome.com', iconPackage: 'fab', icon: 'font-awesome' },
      { name: 'RxJS', version: '7.8.1', link: 'https://www.npmjs.com/package/rxjs', iconPackage: 'fab', icon: 'js' },
      { name: 'TypeScript', version: ts.version, link: 'https://www.npmjs.com/package/typescript', iconPackage: 'fas', icon: 'code' }
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
