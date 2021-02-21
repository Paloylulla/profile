import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./page-one/page-one.module').then((m) => m.PageOneModule),
  },
  {
    path: 'homepage',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
