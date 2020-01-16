import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@pages/home/home.component';
import { ProjectsComponent } from '@pages/projects/projects.component';
import { GameComponent } from '@pages/game/game.component';
import { BuildInfoComponent } from '@pages/build-info/build-info.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'game', component: GameComponent },
  { path: 'build-info', component: BuildInfoComponent },
  { path: '**', component: PageNotFoundComponent }
];

/** Standalone module for routing */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
