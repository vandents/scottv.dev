import { NgModule               } from '@angular/core';
import { Routes, RouterModule   } from '@angular/router';


export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('@pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'portfolio', loadComponent: () => import('@pages/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'tic-tac-toe', loadComponent: () => import('@pages/game/game.component').then(m => m.GameComponent) },
  { path: 'build-info', loadComponent: () => import('@pages/build-info/build-info.component').then(m => m.BuildInfoComponent) },
  { path: 'algorithms', loadComponent: () => import('@pages/algorithms/algorithms.component').then(m => m.AlgorithmsComponent) },
  { path: 'about', loadComponent: () => import('@pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'tools', loadComponent: () => import('@pages/tools/tools.component').then(m => m.ToolsComponent) },
  { path: 'base64-tool', loadComponent: () => import('@pages/base64-tool/base64-tool.component').then(m => m.Base64ToolComponent) },
  { path: 'diff-checker', loadComponent: () => import('@pages/diff-checker/diff-checker.component').then(m => m.DiffCheckerComponent) },
  { path: 'json-formatter', loadComponent: () => import('@pages/json-formatter/json-formatter.component').then(m => m.JsonFormatterComponent) },
  { path: 'markdown-previewer', loadComponent: () => import('@pages/markdown-previewer/markdown-previewer.component').then(m => m.MarkdownPreviewerComponent) },
  { path: 'jwt-debugger', loadComponent: () => import('@pages/jwt-debugger/jwt-debugger.component').then(m => m.JwtDebuggerComponent) },
  { path: 'snake', loadComponent: () => import('@pages/snake-game/snake-game.component').then(m => m.SnakeGameComponent) },
  { path: '**', loadComponent: () => import('@pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) }
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
