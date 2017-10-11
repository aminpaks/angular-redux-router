import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownXModule } from './dropdown-x';
import { FeatureXComponent } from './feature-x.component';
import { FeatureXRoutingModule } from './feature-x-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DropdownXModule,
    FeatureXRoutingModule,
  ],
  exports: [
    DropdownXModule,
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
export class FeatureXModule { }
