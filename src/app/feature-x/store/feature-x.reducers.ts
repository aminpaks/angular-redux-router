import { combineReducers } from 'redux';
import { Action } from 'app/store';
import { FeatureXState } from './feature-x.types';
import { InitialState as DropdownXInitialState, reducer as dropdownXReducer } from 'app/feature-x/dropdown-x';

export const InitialState: FeatureXState = {
  dropdownX: DropdownXInitialState,
};

export const reducer = combineReducers<FeatureXState>({
  dropdownX: dropdownXReducer,
});
