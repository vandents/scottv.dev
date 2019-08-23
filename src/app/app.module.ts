// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatInputModule, MatButtonModule, MatGridListModule, MatMenuModule, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { GameComponent } from './game/game.component';
import { BuildInfoComponent } from './build-info/build-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Component Dialogs
import { ViewImageDialogComponent } from './view-image-dialog/view-image-dialog.component';
import { GameWinDialogComponent } from './game/game-win-dialog/game-win-dialog.component';
import { ChooseCompetitorDialogComponent } from './game/choose-competitor-dialog/choose-competitor-dialog.component';

// Services
import { BrowserService } from './services/browser-service/browser.service';
import { FirebaseService } from './services/firebase-service/firebase.service';

// Custom Modules
import { AppRoutingModule } from './app-routing.module';
import { AppIconsModule } from './app-icons.module';

// Various Third Party Modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeviceDetectorService } from 'ngx-device-detector';

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
    ChooseCompetitorDialogComponent
  ],
  imports: [
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
    MatSnackBarModule,
    MatTooltipModule,
    MatToolbarModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase, 'scottv.dev'),
    AngularFirestoreModule
  ],
  entryComponents: [
    ViewImageDialogComponent,
    GameWinDialogComponent,
    ChooseCompetitorDialogComponent
  ],
  providers: [
    BrowserService,
    DeviceDetectorService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
