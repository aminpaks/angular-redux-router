import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/of';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreService } from 'app/store//store.service';
import { DropdownXModule } from 'app/dropdown-x/dropdown-x.module';
import { FeatureXComponent } from './feature-x.component';
import { FeatureXRoutingModule } from './feature-x-routing.module';
import { reducer as featureXReducer } from './store/feature-x.reducers';

@NgModule({
  imports: [
    CommonModule,
    DropdownXModule,
    FeatureXRoutingModule,
  ],
  providers: [
  ],
  declarations: [
    FeatureXComponent,
  ],
  entryComponents: [
    FeatureXComponent,
  ],
})
export class FeatureXModule {
  constructor (storeService: StoreService) {
    storeService.addInitialReducer('featureX', featureXReducer);
  }
}
