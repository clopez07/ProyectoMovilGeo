import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresFormPage } from './lugares-form.page';

const routes: Routes = [
  {
    path: '',
    component: LugaresFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugaresFormPageRoutingModule {}
