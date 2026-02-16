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
  faAngleDown,
  faArrowRight,
  faBalanceScale,
  faBold,
  faBolt,
  faBug,
  faCalendar,
  faCheckCircle,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircle,
  faCode,
  faCodeBranch,
  faCopy,
  faCube,
  faDatabase,
  faDragon,
  faEnvelope,
  faExclamationTriangle,
  faFileCode,
  faFilePdf,
  faFrown,
  faGem,
  faHammer,
  faHashtag,
  faHeart,
  faHome,
  faInfoCircle,
  faKey,
  faLaptopCode,
  faLightbulb,
  faLink,
  faLock,
  faLowVision,
  faMagic,
  faMicrochip,
  faMonument,
  faMoon,
  faMousePointer,
  faPlay,
  faRandom,
  faRedo,
  faRobot,
  faSmileWink,
  faSortAmountUp,
  faSortNumericUpAlt,
  faSquareRootAlt,
  faSkullCrossbones,
  faTerminal,
  faTrash,
  faUndoAlt,
  faUnlock,
  faUser,
  faUserFriends,
  faXmark
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
      faAngleDown,
      faArrowRight,
      faBalanceScale,
      faBold,
      faBolt,
      faBug,
      faCalendar,
      faCheckCircle,
      faChevronDown,
      faChevronLeft,
      faChevronRight,
      faChevronUp,
      faCircle,
      faCode,
      faCodeBranch,
      faCopy,
      faCube,
      faDatabase,
      faDragon,
      faEnvelope,
      faExclamationTriangle,
      faFileCode,
      faFilePdf,
      faFrown,
      faGem,
      faHammer,
      faHashtag,
      faHeart,
      faHome,
      faInfoCircle,
      faKey,
      faLaptopCode,
      faLightbulb,
      faLink,
      faLock,
      faLowVision,
      faMagic,
      faMicrochip,
      faMonument,
      faMoon,
      faMousePointer,
      faPlay,
      faRandom,
      faRedo,
      faRobot,
      faSmileWink,
      faSortAmountUp,
      faSortNumericUpAlt,
      faSquareRootAlt,
      faSkullCrossbones,
      faTerminal,
      faTrash,
      faUnlock,
      faUndoAlt,
      faUser,
      faUserFriends,
      faXmark,

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
      faVuejs,
      faWindows
    );
  }

}
