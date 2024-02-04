import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaMarcaPageRoutingModule } from './nova-marca-routing.module';

import { NovaMarcaPage } from './nova-marca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaMarcaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NovaMarcaPage]
})
export class NovaMarcaPageModule {}
