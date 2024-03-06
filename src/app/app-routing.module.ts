import { NgModule               } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { Routes, RouterModule   } from '@angular/router';
import { HomeComponent          } from '@pages/home/home.component';
import { ProjectsComponent      } from '@pages/projects/projects.component';
import { GameComponent          } from '@pages/game/game.component';
import { BuildInfoComponent     } from '@pages/build-info/build-info.component';
import { PageNotFoundComponent  } from '@pages/page-not-found/page-not-found.component';
import { AlgorithmsComponent    } from '@pages/algorithms/algorithms.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: ProjectsComponent },
  { path: 'game', component: GameComponent },
  { path: 'build-info', component: BuildInfoComponent },
  { path: 'algorithms', component: AlgorithmsComponent },
  { path: '**', component: PageNotFoundComponent }
];


/** Standalone module for routing */
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
