import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresListaPage } from './lugares-lista.page';

const routes: Routes = [
  {
    path: '',
    component: LugaresListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugaresListaPageRoutingModule {}
