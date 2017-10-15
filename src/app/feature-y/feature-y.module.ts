import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/of';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StoreService } from 'app/store/store.service';
import { DropdownXModule } from 'app/dropdown-x/dropdown-x.module';
import { FeatureYComponent } from './feature-y.component';
import { FeatureYRoutingModule } from './feature-y-routing.module';
import { reducer as featureYReducer } from './store/feature-y.reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownXModule,
    FeatureYRoutingModule,
  ],
  declarations: [FeatureYComponent],
  entryComponents: [FeatureYComponent],
})
export class FeatureYModule {
  constructor(storeService: StoreService) {
    storeService.addInitialReducer('featureY', featureYReducer);
  }
}
