import { Injectable } from '@angular/core';
import { EpicMiddleware } from 'redux-observable';
import { NgRedux } from '@angular-redux/store';
import { PlainAction } from 'redux-typed-actions';
import { combineReducers } from 'redux';

import { AppState, RootState } from './store.types';

export type Reducer<S> = (state: S, action: PlainAction) => S;
export interface ReducerContainer<S> {
  [keyName: string]: Reducer<S>;
}

@Injectable()
export class StoreService {
  private epics: any[] = [];
  private reducers: any = {};

  getAllEpics(): EpicMiddleware<PlainAction, AppState>[] {
    return this.epics;
  }

  getAllInitialReducers<S extends AppState>(): ReducerContainer<S> {
    return this.reducers;
  }

  addInitialReducer<S extends AppState>(keyName: string, reducer: Reducer<S>): void {
    this.reducers[keyName] = reducer;
  }

  replaceReducers<S extends AppState>(rootReducer: Reducer<RootState>, store: NgRedux<S>): void {
    store.replaceReducer(combineReducers<S>({
      ...this.getAllInitialReducers(),
      root: rootReducer,
    }));

  }

  registerEpic(epic: any): void {
    this.epics.push(epic);
  }
}
