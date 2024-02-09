import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoModeloPage } from './novo-modelo.page';

const routes: Routes = [
  {
    path: '',
    component: NovoModeloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoModeloPageRoutingModule {}
