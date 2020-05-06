// Angular Modules
import { MatButtonModule                  } from '@angular/material/button';
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

// Root component
import { AppComponent                     } from './app.component';

// Elements
import { ToolbarComponent                 } from '@elements/toolbar/toolbar.component';
import { FooterComponent                  } from '@elements/footer/footer.component';
import { ViewImageDialogComponent         } from '@elements/dialogs/view-image-dialog/view-image-dialog.component';
import { GameWinDialogComponent           } from '@elements/dialogs/game-win-dialog/game-win-dialog.component';
import { ChooseCompetitorDialogComponent  } from '@elements/dialogs/choose-competitor-dialog/choose-competitor-dialog.component';

// Pages
import { HomeComponent                    } from '@pages/home/home.component';
import { ProjectsComponent                } from '@pages/projects/projects.component';
import { GameComponent                    } from '@pages/game/game.component';
import { BuildInfoComponent               } from '@pages/build-info/build-info.component';
import { PageNotFoundComponent            } from '@pages/page-not-found/page-not-found.component';
import { AlgorithmsComponent              } from '@pages/algorithms/algorithms.component';

// Services
import { BrowserService                   } from '@services/browser-service/browser.service';
import { FirebaseService                  } from '@services/firebase-service/firebase.service';
import { AlgorithmService                 } from './services/algorithm-service/algorithm.service';

// Custom Modules
import { AppRoutingModule                 } from './app-routing.module';
import { AppIconsModule                   } from './app-icons.module';

// Third Party Modules
import { FontAwesomeModule                } from '@fortawesome/angular-fontawesome';
import { DeviceDetectorService            } from 'ngx-device-detector';
import { AngularFireModule                } from 'angularfire2';
import { AngularFirestoreModule           } from 'angularfire2/firestore';

// Environment variables
import { environment                      } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    GameComponent,
    ViewImageDialogComponent,
    GameWinDialogComponent,
    BuildInfoComponent,
    PageNotFoundComponent,
    ChooseCompetitorDialogComponent,
    AlgorithmsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'scottv.dev'),
    AngularFirestoreModule,
    AppIconsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
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
    FormsModule
  ],
  entryComponents: [
    ChooseCompetitorDialogComponent,
    GameWinDialogComponent,
    ViewImageDialogComponent
  ],
  providers: [
    AlgorithmService,
    BrowserService,
    DeviceDetectorService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
