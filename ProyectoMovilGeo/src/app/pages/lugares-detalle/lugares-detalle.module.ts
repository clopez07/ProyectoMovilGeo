import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugaresDetallePageRoutingModule } from './lugares-detalle-routing.module';

import { LugaresDetallePage } from './lugares-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugaresDetallePageRoutingModule
  ],
  declarations: [LugaresDetallePage]
})
export class LugaresDetallePageModule {}
