import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureYComponent } from './feature-y.component';

export const routes: Routes = [{
  path: '',
  component: FeatureYComponent,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class FeatureYRoutingModule {}
