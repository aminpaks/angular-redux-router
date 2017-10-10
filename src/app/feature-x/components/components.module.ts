import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownXModule } from './dropdown-x';
import { DropdownXComponent } from './dropdown-x/dropdown-x.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownXModule,
  ],
  exports: [
    DropdownXModule,
  ],
  providers: [
  ],
  declarations: [
  ],
})
export class ComponentsModule { }
