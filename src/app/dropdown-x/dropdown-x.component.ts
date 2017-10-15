import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select, WithSubStore, NgRedux, PathSelector } from '@angular-redux/store';

import { AppState } from 'app/feature-x/store/feature-x.types';
import {
  DropdownXLoadAction,
  DropdownXSelectAction,
  DropdownXMoveToAction,
} from './store/dropdown-x.actions';
import { DropdownXItem } from './dropdown-x.types';


export function localReducer(state: any, action: any) {
  debugger;
  console.log(action);
  return state;
}


@WithSubStore({
  basePathMethodName: 'getStoreBasePath',
  localReducer,
})
@Component({
  selector: 'app-dropdown-x',
  templateUrl: './dropdown-x.component.html',
  styleUrls: ['./dropdown-x.component.scss']
})
export class DropdownXComponent implements OnInit {

  constructor(private store: NgRedux<AppState>) { }

  @Input()
  storeKey: string;

  @select('items')
  items$: Observable<DropdownXItem[]>;

  @select('loading')
  loadingItems$: Observable<boolean>;

  @select('selectedValue')
  selectedValue$: Observable<DropdownXItem>;

  ngOnInit() {
    this.store.dispatch(DropdownXLoadAction.get(undefined, this.storeKey));
  }

  getStoreBasePath(): PathSelector | undefined {
    if (this.storeKey) {
      return this.storeKey.split('/');
    }
  }

  selectionChange(target: HTMLSelectElement) {
    const { value } = target;
    return this.items$
      .take(1)
      .map(items => items.find(item => item.value === value))
      .map(item => item === undefined ? false : item)
      .subscribe(item => this.store.dispatch(DropdownXSelectAction.strictGet(item, this.storeKey)));
  }

  moveToButtonClick(): void {
    this.selectedValue$
      .take(1)
      .subscribe(item => this.store.dispatch(DropdownXMoveToAction.strictGet(item, this.storeKey)));
  }
}
