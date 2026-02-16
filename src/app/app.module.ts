// Angular Modules
import { MatButtonModule                  } from '@angular/material/button';
import { MatCheckboxModule                } from '@angular/material/checkbox';
import { MatExpansionModule               } from '@angular/material/expansion';
import { MatGridListModule                } from '@angular/material/grid-list';
import { MatInputModule                   } from '@angular/material/input';
import { MatMenuModule                    } from '@angular/material/menu';
import { MatSelectModule                  } from '@angular/material/select';
import { MatToolbarModule                 } from '@angular/material/toolbar';
import { BrowserModule                    } from '@angular/platform-browser';
import { NgModule                         } from '@angular/core';
import { BrowserAnimationsModule          } from '@angular/platform-browser/animations';
import { MatCardModule                    } from '@angular/material/card';
import { MatTooltipModule                 } from '@angular/material/tooltip';
import { MatDividerModule                 } from '@angular/material/divider';
import { MatChipsModule                   } from '@angular/material/chips';
import { MatDialogModule                  } from '@angular/material/dialog';
import { MatSnackBarModule                } from '@angular/material/snack-bar';
import { MatListModule                    } from '@angular/material/list';
import { FormsModule                      } from '@angular/forms';
import { RouterModule                     } from '@angular/router';
import { CommonModule                     } from '@angular/common';

// Root component
import { AppComponent                     } from './app.component';

// Elements
import { ToolbarComponent                 } from '@elements/toolbar/toolbar.component';
import { FooterComponent                  } from '@elements/footer/footer.component';
import { ViewImageDialogComponent         } from '@elements/dialogs/view-image-dialog/view-image-dialog.component';
import { GameWinDialogComponent           } from '@elements/dialogs/game-win-dialog/game-win-dialog.component';
import { ChooseCompetitorDialogComponent  } from '@elements/dialogs/choose-competitor-dialog/choose-competitor-dialog.component';
import { ArticleComponent                 } from '@elements/article/article.component';
import { MenuAutoOpenComponent            } from '@elements/menu-auto-open/menu-auto-open.component';

// Directives
import { LazyImgDirective                 } from './directives/lazy-img-directive/lazy-img.directive';

// Pages
import { HomeComponent                    } from '@pages/home/home.component';
import { ProjectsComponent                } from '@pages/projects/projects.component';
import { GameComponent                    } from '@pages/game/game.component';
import { BuildInfoComponent               } from '@pages/build-info/build-info.component';
import { PageNotFoundComponent            } from '@pages/page-not-found/page-not-found.component';
import { AlgorithmsComponent              } from '@pages/algorithms/algorithms.component';
import { LifeComponent                    } from '@pages/life/life.component';
import { JwtDebuggerComponent             } from '@pages/jwt-debugger/jwt-debugger.component';
import { ToolsComponent                   } from '@pages/tools/tools.component';
import { SnakeGameComponent               } from '@pages/snake-game/snake-game.component';
import { Base64ToolComponent              } from '@pages/base64-tool/base64-tool.component';
import { DiffCheckerComponent             } from '@pages/diff-checker/diff-checker.component';
import { JsonFormatterComponent           } from '@pages/json-formatter/json-formatter.component';

// Pipes
import { SafePipe                         } from '@pipes/safe/safe.pipe';

// Services
import { BrowserService                   } from '@services/browser-service/browser.service';
import { FirebaseService                  } from '@services/firebase-service/firebase.service';
import { AlgorithmService                 } from '@services/algorithm-service/algorithm.service';
import { ThemeService                     } from '@services/theme-service/theme.service';

// Custom Modules
import { AppRoutingModule                 } from '@app/app-routing.module';
import { AppIconsModule                   } from '@app/app-icons.module';

// Third Party Modules
import { FontAwesomeModule                } from '@fortawesome/angular-fontawesome';
import { DeviceDetectorService            } from 'ngx-device-detector';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore   } from '@angular/fire/firestore';
import { CarouselModule                   } from '@coreui/angular';

// Environment variables
import { environment                      } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    // Pages
    HomeComponent,
    ProjectsComponent,
    GameComponent,
    BuildInfoComponent,
    PageNotFoundComponent,
    AlgorithmsComponent,
    LifeComponent,
    JwtDebuggerComponent,
    ToolsComponent,
    SnakeGameComponent,
    Base64ToolComponent,
    DiffCheckerComponent,
    JsonFormatterComponent,
    // Elements
    ToolbarComponent,
    FooterComponent,
    ArticleComponent,
    MenuAutoOpenComponent,
    // Dialogs
    GameWinDialogComponent,
    ViewImageDialogComponent,
    ChooseCompetitorDialogComponent,
    // Directives
    LazyImgDirective,
    // Pipes
    SafePipe
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AppIconsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatToolbarModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    CarouselModule
  ],
  providers: [
    AlgorithmService,
    BrowserService,
    DeviceDetectorService,
    FirebaseService,
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
