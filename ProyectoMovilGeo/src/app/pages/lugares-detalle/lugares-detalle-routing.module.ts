import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresDetallePage } from './lugares-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: LugaresDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugaresDetallePageRoutingModule {}
