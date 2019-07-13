// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatTabsModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

// Custom Modules
import { AppRoutingModule } from './app-routing.module';
import { AppIconsModule } from './app-icons.module';

// Various Third Party Modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewImageDialogComponent } from './view-image-dialog/view-image-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    GameComponent,
    ViewImageDialogComponent
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
    MatSnackBarModule,
    MatTooltipModule,
    MatTabsModule,
    MatTabsModule,
    MatToolbarModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ViewImageDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
