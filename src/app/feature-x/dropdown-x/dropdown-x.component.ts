import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select, NgRedux } from '@angular-redux/store';

import { AppState } from 'app/feature-x';
import {
  DropdownXLoadAction,
  DropdownXSelectAction,
  FeatureXMoveToAction,
} from './store/dropdown-x.actions';
import { DropdownXItem } from './store/dropdown-x.types';
import {
  dropdownXItemsSelector,
  dropdownXItemsLoadingSelector,
  dropdownXSelectedValueSelector,
} from './store/dropdown-x.selectors';

@Component({
  selector: 'app-dropdown-x',
  templateUrl: './dropdown-x.component.html',
  styleUrls: ['./dropdown-x.component.scss']
})
export class DropdownXComponent {

  constructor(private store: NgRedux<AppState>) {
    this.store.dispatch(DropdownXLoadAction.get());
  }

  @select(dropdownXItemsSelector)
  items$: Observable<DropdownXItem[]>;

  @select(dropdownXItemsLoadingSelector)
  loadingItems$: Observable<boolean>;

  @select(dropdownXSelectedValueSelector)
  selectedValue$: Observable<DropdownXItem>;

  selectionChange(target: HTMLSelectElement) {
    const { value } = target;
    return this.items$
      .take(1)
      .map(items => items.find(item => item.value === value))
      .map(item => item === undefined ? false : item)
      .subscribe(item => this.store.dispatch(DropdownXSelectAction.strictGet(item)));
  }

  moveToButtonClick(): void {
    this.selectedValue$
      .take(1)
      .subscribe(item => this.store.dispatch(FeatureXMoveToAction.strictGet(item.url)));
  }
}
