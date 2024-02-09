import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NovoModeloPageRoutingModule } from './novo-modelo-routing.module';
import { NovoModeloPage } from './novo-modelo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoModeloPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [NovoModeloPage]
})
export class NovoModeloPageModule { }
