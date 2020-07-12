import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full',
    loadChildren:
      () => import('./features/home/home.module').then(M => M.HomeModule)
  },
  { path: 'detalle',
    loadChildren:
      () => import('./features/product-detail/product-detail.module').then(M => M.ProductDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
