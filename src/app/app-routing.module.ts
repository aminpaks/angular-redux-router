import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'feature-y',
  loadChildren: 'app/feature-y/feature-y.module#FeatureYModule',
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home',
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
