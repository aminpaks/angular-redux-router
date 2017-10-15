import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreService } from 'app/store/store.service';
import { DropdownXEpics } from './store/dropdown-x.epics';
import { DropdownXService } from './store/dropdown-x.service';
import { DropdownXComponent } from './dropdown-x.component';


@NgModule({
  providers: [
    DropdownXEpics,
    DropdownXService,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DropdownXComponent,
  ],
  declarations: [
    DropdownXComponent,
  ],
})
export class DropdownXModule {
  constructor(
    storeService: StoreService,
    epics: DropdownXEpics,
  ) {

    storeService.registerEpic(epics.createEpic());
  }
}
