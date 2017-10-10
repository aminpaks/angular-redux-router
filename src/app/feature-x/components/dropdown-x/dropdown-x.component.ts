import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select, NgRedux } from '@angular-redux/store';

import { AppState, Action } from 'app/store';
import { DropdownXSelectAction, DropdownXLoadAction } from './store/dropdown-x.actions';
import { DropdownXItem } from './store/dropdown-x.types';
import {
  dropdownXItemsSelector,
  dropdownXItemsLoadingSelector,
} from './store/dropdown-x.selectors';

@Component({
  selector: 'app-dropdown-x',
  templateUrl: './dropdown-x.component.html',
  styleUrls: ['./dropdown-x.component.scss']
})
export class DropdownXComponent {

  constructor(private store: NgRedux<AppState>) {
    this.store.dispatch(new DropdownXLoadAction());
  }

  @select(dropdownXItemsSelector)
  items$: Observable<DropdownXItem[]>;

  @select(dropdownXItemsLoadingSelector)
  loadingItems$: Observable<boolean>;

  selectionChange(target: HTMLSelectElement): void {
    const { value } = target;
    this.items$
      .map(items => items.find(item => item.value === value))
      .take(1)
      .subscribe(item => {
        this.store.dispatch(new DropdownXSelectAction(item === undefined ? false : item));
      });
  }

  moveToButtonClick(): void {
    debugger;
  }
}
