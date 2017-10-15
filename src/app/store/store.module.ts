import { combineReducers } from 'redux';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';

import { AppState } from './store.types';
import { StoreService } from './store.service';
import { rootReducer } from './store.reducers';
import { AppLoadAction } from './store.actions';


@NgModule({
  imports: [NgReduxModule],
  exports: [NgReduxModule],
})
export class StoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: StoreModule,
    public store: NgRedux<AppState>,
    storeService: StoreService,
    reduxDevTools: DevToolsExtension,
  ) {

    if (parentModule) {
      throw new Error('StoreModule is already loaded. Do NOT import it in other modules!');
    }

    store.configureStore(
      combineReducers<AppState>({ root: rootReducer }),
      {} as AppState,
      storeService.getAllEpics(),
      reduxDevTools.isEnabled() ? [reduxDevTools.enhancer()] : []);

    storeService.replaceRootReducer(rootReducer, store);
    store.dispatch(AppLoadAction.get());
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StoreModule,
      providers: [StoreService],
    };
  }
}
