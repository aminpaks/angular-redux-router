import { combineReducers } from 'redux';
import { Action } from 'app/store';
import { ComponentsState } from './components.types';
import { InitialState as DropdownXInitialState, reducer as dropdownXReducer } from 'app/feature-x/components/dropdown-x';

export const InitialState: ComponentsState = {
  dropdownX: DropdownXInitialState,
};

export const reducer = combineReducers<ComponentsState>({
  dropdownX: dropdownXReducer,
});
