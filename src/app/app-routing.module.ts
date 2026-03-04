import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'lista-juegos',
    loadChildren: () => import('./lista-juegos/lista-juegos.module').then(m => m.ListaJuegosPageModule)
  },
  {
    path: 'agregar-juego',
    loadChildren: () => import('./agregar-juego/agregar-juego.module').then(m => m.AgregarJuegoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }