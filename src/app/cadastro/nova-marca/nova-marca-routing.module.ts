import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaMarcaPage } from './nova-marca.page';

const routes: Routes = [
  {
    path: '',
    component: NovaMarcaPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaMarcaPageRoutingModule { }
