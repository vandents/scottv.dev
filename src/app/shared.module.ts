import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';

// Shared Elements
import { ArticleComponent } from '@elements/article/article.component';
import { ViewImageDialogComponent } from '@elements/dialogs/view-image-dialog/view-image-dialog.component';
import { GameWinDialogComponent } from '@elements/dialogs/game-win-dialog/game-win-dialog.component';
import { ChooseCompetitorDialogComponent } from '@elements/dialogs/choose-competitor-dialog/choose-competitor-dialog.component';

// Directives & Pipes
import { LazyImgDirective } from './directives/lazy-img-directive/lazy-img.directive';
import { SafePipe } from '@pipes/safe/safe.pipe';

// Third Party
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppIconsModule } from '@app/app-icons.module';
import { CarouselModule } from '@coreui/angular';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule,
  MatTooltipModule,
  MatDividerModule,
  MatChipsModule,
  MatDialogModule,
  MatSnackBarModule,
  MatListModule
];

@NgModule({
  declarations: [
    ArticleComponent,
    ViewImageDialogComponent,
    GameWinDialogComponent,
    ChooseCompetitorDialogComponent,
    LazyImgDirective,
    SafePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ...MATERIAL_MODULES,
    FontAwesomeModule,
    AppIconsModule,
    CarouselModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ...MATERIAL_MODULES,
    FontAwesomeModule,
    AppIconsModule,
    CarouselModule,
    ArticleComponent,
    ViewImageDialogComponent,
    GameWinDialogComponent,
    ChooseCompetitorDialogComponent,
    LazyImgDirective,
    SafePipe
  ]
})
export class SharedModule { }
