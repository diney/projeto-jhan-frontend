import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'marca/:id',
    loadChildren: () => import('./cadastro/marca/marca.module').then( m => m.MarcaPageModule) 
   
  },
  {
    path: 'marca',
    loadChildren: () => import('./cadastro/marca/marca.module').then( m => m.MarcaPageModule)
  },
  {
    path: 'modelo',
    loadChildren: () => import('./cadastro/modelo/modelo.module').then( m => m.ModeloPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
