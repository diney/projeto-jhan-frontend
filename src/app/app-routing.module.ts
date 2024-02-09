import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'cadastro/marca',
    loadChildren: () => import('./cadastro/marca/marca.module').then(m => m.MarcaPageModule)
  },
  {
    path: 'cadastro/marca/:id',
    loadChildren: () => import('./cadastro/nova-marca/nova-marca.module').then(m => m.NovaMarcaPageModule)
  },
  {
    path: 'cadastro/nova-marca',
    loadChildren: () => import('./cadastro/nova-marca/nova-marca.module').then(m => m.NovaMarcaPageModule)
  },

  {
    path: 'cadastro/modelo',
    loadChildren: () => import('./cadastro/modelo/modelo.module').then(m => m.ModeloPageModule)
  },
  {
    path: 'cadastro/modelo/:id',
    loadChildren: () => import('./cadastro/novo-modelo/novo-modelo.module').then(m => m.NovoModeloPageModule)
  },
  {
    path: 'cadastro/novo-modelo',
    loadChildren: () => import('./cadastro/novo-modelo/novo-modelo.module').then(m => m.NovoModeloPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
