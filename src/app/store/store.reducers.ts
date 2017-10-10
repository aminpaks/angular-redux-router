import { combineReducers } from 'redux';

import { AppState } from './store.types';
import { reducer as featureXReducer } from '../feature-x/store';

export const rootReducer = combineReducers<AppState>({
  featureX: featureXReducer,
});
