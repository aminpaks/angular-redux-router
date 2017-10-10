import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureXComponent } from './feature-x.component';

export const routes: Routes = [{
  path: 'feature-x',
  component: FeatureXComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureXRoutingModule { }
