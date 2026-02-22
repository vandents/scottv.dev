import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VERSION } from '../../../environments/version';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { SharedModule } from '@app/shared.module';


export interface Dependency {
  name: string;
  link: string;
  version: string;
  iconPackage: IconPrefix;
  icon: IconName;
}


/** Page for displaying build and dependency info */
@Component({
  standalone: true,
  imports: [SharedModule],
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
      { name: 'Angular', version: '17.2.3', link: 'https://www.npmjs.com/package/@angular/core', iconPackage: 'fab', icon: 'angular' },
      { name: 'Angular Fire', version: '17.0.1', link: 'https://www.npmjs.com/package/@angular/fire', iconPackage: 'fab', icon: 'angular' },
      { name: 'Core UI', version: '4.7.16', link: 'https://www.npmjs.com/package/@coreui/angular', iconPackage: 'fas', icon: 'code' },
      { name: 'Font Awesome', version: '0.14.1', link: 'https://www.fontawesome.com', iconPackage: 'fab', icon: 'font-awesome' },
      { name: 'RxJS', version: '7.8.1', link: 'https://www.npmjs.com/package/rxjs', iconPackage: 'fab', icon: 'js' },
      { name: 'TypeScript', version: '5.2.2', link: 'https://www.npmjs.com/package/typescript', iconPackage: 'fas', icon: 'code' }
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
