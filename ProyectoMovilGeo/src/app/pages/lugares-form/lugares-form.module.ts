import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugaresFormPageRoutingModule } from './lugares-form-routing.module';

import { LugaresFormPage } from './lugares-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugaresFormPageRoutingModule
  ],
  declarations: [LugaresFormPage]
})
export class LugaresFormPageModule {}
