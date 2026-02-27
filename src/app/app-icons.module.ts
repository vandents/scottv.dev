import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Custom TypeScript icon
const faTypescript: IconDefinition = {
  prefix: 'fab' as any,
  iconName: 'typescript' as any,
  icon: [512, 512, [], 'e001', 'M0 256v256h512V0H0v256zm326.6-88.2c13.1 3.1 23.2 9.5 30.6 19.6 3.8 5.2 9.4 15.3 9.2 16.4-.1.4-1.3 1.1-2.7 1.7-1.3.5-6.2 3.5-10.8 6.5l-8.4 5.5-3.8-5.6c-5.5-8.2-11.2-11.7-19.9-12.3-12.7-.9-20.9 6.2-20.9 18 0 3.5.6 6.4 1.9 9.1 2.7 5.6 7.7 9 22.1 15.1 26.5 11.3 37.8 18.7 46 30.2 9.1 12.7 11.1 33 4.9 48.3-6.7 16.7-23.4 28.1-46 31.3-7 1-23.4.9-30.9-.3-16.3-2.4-31.8-10.3-41.1-21-3.6-4.2-10.7-15.5-10.3-16.4.2-.3 1.2-.9 2.3-1.5 1.1-.6 5.2-2.9 9.1-5.2l7.1-4.1 4.4 6.5c6.2 9.4 12.4 13.4 22.4 14.6 13.1 1.5 24.3-4.7 26.6-14.8 1.3-5.5.3-11.3-2.7-15.5-3.3-4.6-10-8.6-25.9-15.4-18.2-7.8-26.1-12.6-33.3-20.2-4.2-4.3-8.1-11-9.8-16.8-1.4-4.6-1.7-16.2-.6-21.2 4.4-19.2 20-32.5 42.6-36.2 7.3-1.2 19.2-.6 26 1.2zm-91.5 21.6l.3 20.4h-42.7v132.2h-36V209.8h-42.7v-20.1c0-11.1.2-20.4.4-20.6.2-.2 27.3-.4 60.2-.3l59.8.2.7 20.4z']
};

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
  faBriefcase,
  faBug,
  faCalendar,
  faCalendarDay,
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
  faDownload,
  faDragon,
  faEnvelope,
  faExclamationTriangle,
  faFileCode,
  faFilePdf,
  faFire,
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
  faLinkedin,
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
      faBriefcase,
      faBug,
      faCalendar,
      faCalendarDay,
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
      faDownload,
      faDragon,
      faEnvelope,
      faExclamationTriangle,
      faFileCode,
      faFilePdf,
      faFire,
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
      faLinkedin,
      faNodeJs,
      faPython,
      faSass,
      faVuejs,
      faWindows,

      // Custom
      faTypescript
    );
  }

}
