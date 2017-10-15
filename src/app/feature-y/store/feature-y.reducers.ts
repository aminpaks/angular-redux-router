import { combineReducers } from 'redux';
import { Reducer } from 'app/store/store.types';
import { AppState, FeatureYState } from './feature-y.types';
import { InitialState as DropdownXInitialState, reducer as dropdownXReducer } from 'app/dropdown-x/store/dropdown-x.reducers';

export const InitialState: FeatureYState = {
  dropdownX: DropdownXInitialState,
};

export const reducer: Reducer<AppState> = combineReducers({
  dropdownX: dropdownXReducer,
}) as any;
