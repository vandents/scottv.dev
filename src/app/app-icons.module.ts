import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Solid Icons (fas)
import {
  faAddressBook,
  faBalanceScale,
  faCircle,
  faCode,
  faCodeBranch,
  faCube,
  faEnvelope,
  faFilePdf,
  faHome,
  faMicrochip,
  faMonument,
  faMousePointer,
  faTerminal,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';

// Brand Icons (fab)
import {
  faAngular,
  faCss3Alt,
  faGit,
  faGithub,
  faHtml5,
  faJsSquare,
  faSass,
  faWindows
} from '@fortawesome/free-brands-svg-icons';

/**
 * This is a module to import individual font awesome icons.
 * Importing icons individually instead of entire packages will
 * make this build around 1 MB smaller!
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class AppIconsModule {

  constructor() {
    library.add(
      // fas
      faAddressBook,
      faBalanceScale,
      faCircle,
      faCode,
      faCodeBranch,
      faCube,
      faEnvelope,
      faFilePdf,
      faHome,
      faMicrochip,
      faMonument,
      faMousePointer,
      faTerminal,
      faTrophy,

      // fab
      faAngular,
      faCss3Alt,
      faGit,
      faGithub,
      faHtml5,
      faJsSquare,
      faSass,
      faWindows
    );
  }

}
