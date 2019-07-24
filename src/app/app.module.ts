// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatGridListModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';

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

// Custom Modules
import { AppRoutingModule } from './app-routing.module';
import { AppIconsModule } from './app-icons.module';

// Various Third Party Modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    MatMenuModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatToolbarModule,
    FontAwesomeModule
  ],
  entryComponents: [
    ViewImageDialogComponent,
    GameWinDialogComponent,
    ChooseCompetitorDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
