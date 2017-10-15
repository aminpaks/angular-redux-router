import { PlainAction } from 'redux-typed-actions';
import { DropdownXItem } from 'app/dropdown-x/dropdown-x.types';
import { DropdownXState } from 'app/dropdown-x/store/dropdown-x.types';

export interface RootState {
  initializing: boolean;
  ready: boolean;
}

export interface AppState {
  root: RootState;
  dropdownX: DropdownXState<DropdownXItem>;
}

export type Reducer<S> = (state: S, action: PlainAction) => S;
export interface ReducerContainer<S> {
  [keyName: string]: Reducer<S>;
}
