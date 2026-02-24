import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugaresListaPageRoutingModule } from './lugares-lista-routing.module';

import { LugaresListaPage } from './lugares-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugaresListaPageRoutingModule
  ],
  declarations: [LugaresListaPage]
})
export class LugaresListaPageModule {}
