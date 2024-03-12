import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Regular Icons (far)
import {
  faMoon as farMoon,
  faSun as farSun
} from '@fortawesome/free-regular-svg-icons';

// Solid Icons (fas)
import {
  faAddressBook,
  faBalanceScale,
  faBold,
  faBolt,
  faBug,
  faCalendar,
  faCircle,
  faCode,
  faCodeBranch,
  faCube,
  faDatabase,
  faEnvelope,
  faFilePdf,
  faFrown,
  faGem,
  faHammer,
  faHashtag,
  faHome,
  faLaptopCode,
  faLink,
  faLowVision,
  faMicrochip,
  faMonument,
  faMoon,
  faMousePointer,
  faRandom,
  faRobot,
  faSmileWink,
  faSortAmountUp,
  faSortNumericUpAlt,
  faSquareRootAlt,
  faSkullCrossbones,
  faTerminal,
  faUndoAlt,
  faUser,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';

// Brand Icons (fab)
import {
  faAndroid,
  faAngular,
  faApple,
  faCss3Alt,
  faFontAwesome,
  faGit,
  faGithub,
  faGithubAlt,
  faGitlab,
  faHtml5,
  faJava,
  faJs,
  faJsSquare,
  faNodeJs,
  faPython,
  faSass,
  faSlackHash,
  faVuejs,
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

  constructor(library: FaIconLibrary) {
    library.addIcons(
      // far
      farMoon,
      farSun,

      // fas
      faAddressBook,
      faBalanceScale,
      faBold,
      faBolt,
      faBug,
      faCalendar,
      faCircle,
      faCode,
      faCodeBranch,
      faCube,
      faDatabase,
      faEnvelope,
      faFilePdf,
      faFrown,
      faGem,
      faHammer,
      faHashtag,
      faHome,
      faLaptopCode,
      faLink,
      faLowVision,
      faMicrochip,
      faMonument,
      faMoon,
      faMousePointer,
      faRandom,
      faRobot,
      faSmileWink,
      faSortAmountUp,
      faSortNumericUpAlt,
      faSquareRootAlt,
      faSkullCrossbones,
      faTerminal,
      faUndoAlt,
      faUser,
      faUserFriends,

      // fab
      faAndroid,
      faAngular,
      faApple,
      faCss3Alt,
      faFontAwesome,
      faGit,
      faGithub,
      faGithubAlt,
      faGitlab,
      faHtml5,
      faJava,
      faJs,
      faJsSquare,
      faNodeJs,
      faPython,
      faSass,
      faSlackHash,
      faVuejs,
      faWindows
    );
  }

}
