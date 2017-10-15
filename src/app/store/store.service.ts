import { Injectable } from '@angular/core';
import { EpicMiddleware } from 'redux-observable';
import { NgRedux } from '@angular-redux/store';
import { PlainAction } from 'redux-typed-actions';
import { combineReducers } from 'redux';

import { AppState, RootState, Reducer, ReducerContainer } from './store.types';



@Injectable()
export class StoreService {
  private epics: any[] = [];
  private reducers: any = {};
  private store: any | undefined;
  private rootReducer: any | undefined;

  constructor() {
    debugger;
  }

  getAllEpics(): EpicMiddleware<PlainAction, AppState>[] {
    return this.epics;
  }

  getAllInitialReducers<S extends AppState>(): ReducerContainer<S> {
    return this.reducers;
  }

  addInitialReducer<S extends AppState>(keyName: string, reducer: Reducer<S>): void {
    this.reducers[keyName] = reducer;

    if (this.store) {
      debugger;
      this.replaceRootReducer(this.rootReducer, this.store);
    }
  }

  replaceRootReducer<S extends AppState>(rootReducer: Reducer<RootState>, store: NgRedux<S>): void {
    if (!this.store) {
      this.store = store;
    }
    if (!this.rootReducer) {
      this.rootReducer = rootReducer;
    }
    store.replaceReducer(combineReducers<S>({
      ...this.getAllInitialReducers(),
      root: rootReducer,
    }));
  }

  registerEpic(epic: any): void {
    this.epics.push(epic);
  }
}
