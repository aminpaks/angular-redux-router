import { combineReducers } from 'redux';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';

import { AppState } from './store.types';
import { StoreService } from './store.service';
import { rootReducer } from './store.reducers';
import { AppLoadAction } from './store.actions';


@NgModule({
  imports: [NgReduxModule],
  exports: [NgReduxModule],
  providers: [StoreService],
})
export class StoreModule {
  constructor(
    public store: NgRedux<AppState>,
    storeService: StoreService,
    reduxDevTools: DevToolsExtension,
  ) {

    store.configureStore(
      combineReducers<AppState>({ root: rootReducer }),
      {} as AppState,
      storeService.getAllEpics(),
      reduxDevTools.isEnabled() ? [reduxDevTools.enhancer()] : []);

    storeService.replaceReducers(rootReducer, store);
    store.dispatch(AppLoadAction.get());
  }
}
