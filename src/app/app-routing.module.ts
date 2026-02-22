import { NgModule               } from '@angular/core';
import { Routes, RouterModule   } from '@angular/router';
import { HomeComponent          } from '@pages/home/home.component';
import { ProjectsComponent      } from '@pages/projects/projects.component';
import { GameComponent          } from '@pages/game/game.component';
import { BuildInfoComponent     } from '@pages/build-info/build-info.component';
import { PageNotFoundComponent  } from '@pages/page-not-found/page-not-found.component';
import { AlgorithmsComponent    } from '@pages/algorithms/algorithms.component';
import { LifeComponent          } from '@pages/life/life.component';
import { JwtDebuggerComponent   } from '@pages/jwt-debugger/jwt-debugger.component';
import { ToolsComponent         } from '@pages/tools/tools.component';
import { SnakeGameComponent     } from '@pages/snake-game/snake-game.component';
import { Base64ToolComponent    } from '@pages/base64-tool/base64-tool.component';
import { DiffCheckerComponent   } from '@pages/diff-checker/diff-checker.component';
import { JsonFormatterComponent } from '@pages/json-formatter/json-formatter.component';
import { MarkdownPreviewerComponent } from '@pages/markdown-previewer/markdown-previewer.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: ProjectsComponent },
  { path: 'tic-tac-toe', component: GameComponent },
  { path: 'build-info', component: BuildInfoComponent },
  { path: 'algorithms', component: AlgorithmsComponent },
  { path: 'life', component: LifeComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'base64-tool', component: Base64ToolComponent },
  { path: 'diff-checker', component: DiffCheckerComponent },
  { path: 'json-formatter', component: JsonFormatterComponent },
  { path: 'markdown-previewer', component: MarkdownPreviewerComponent },
  { path: 'jwt-debugger', component: JwtDebuggerComponent },
  { path: 'snake', component: SnakeGameComponent },
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
