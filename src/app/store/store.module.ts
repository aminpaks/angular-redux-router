import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';

import { AppState } from './store.types';
import { StoreService } from './store.service';
import { rootReducer } from './store.reducers';
import { convertActionMiddleware } from './store.utils';

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
      rootReducer,
      {} as AppState,
      [convertActionMiddleware as any].concat(storeService.getAllEpics()),
      reduxDevTools.isEnabled() ? [reduxDevTools.enhancer()] : []);
  }
}
