import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModeloPageRoutingModule } from './modelo-routing.module';

import { ModeloPage } from './modelo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModeloPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModeloPage]
})
export class ModeloPageModule {}
