import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'lugares-lista',
    loadChildren: () => import('./pages/lugares-lista/lugares-lista.module').then( m => m.LugaresListaPageModule)
  },
  {
    path: 'lugares-detalle/:id',
    loadChildren: () => import('./pages/lugares-detalle/lugares-detalle.module').then( m => m.LugaresDetallePageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'lugares-form',
    loadChildren: () => import('./pages/lugares-form/lugares-form.module').then( m => m.LugaresFormPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
