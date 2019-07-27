import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Solid Icons (fas)
import {
  faAddressBook,
  faBalanceScale,
  faBold,
  faCalendar,
  faCircle,
  faCode,
  faCodeBranch,
  faCube,
  faEnvelope,
  faFilePdf,
  faFrown,
  faHammer,
  faHashtag,
  faHome,
  faLowVision,
  faMicrochip,
  faMonument,
  faMousePointer,
  faRobot,
  faSquare,
  faSkull,
  faTerminal,
  faTrophy,
  faUndoAlt,
  faUser,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';

// Brand Icons (fab)
import {
  faAngular,
  faCss3Alt,
  faFontAwesome,
  faGit,
  faGithub,
  faGithubAlt,
  faGithubSquare,
  faHtml5,
  faJs,
  faJsSquare,
  faSass,
  faSlackHash,
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
      faBold,
      faCalendar,
      faCircle,
      faCode,
      faCodeBranch,
      faCube,
      faEnvelope,
      faFilePdf,
      faFrown,
      faHammer,
      faHashtag,
      faHome,
      faLowVision,
      faMicrochip,
      faMonument,
      faMousePointer,
      faRobot,
      faSquare,
      faSkull,
      faTerminal,
      faTrophy,
      faUndoAlt,
      faUser,
      faUserFriends,

      // fab
      faAngular,
      faCss3Alt,
      faFontAwesome,
      faGit,
      faGithub,
      faGithubAlt,
      faGithubSquare,
      faHtml5,
      faJs,
      faJsSquare,
      faSass,
      faSlackHash,
      faWindows
    );
  }

}
