import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '',redirectTo: '/licence_style',pathMatch: 'full' },
    { path: 'licence_style', loadChildren: './licence-style/licence-style.module#LicenceStyleModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})

export class routing { }