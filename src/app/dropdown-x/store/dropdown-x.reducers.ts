import { PlainAction } from 'redux-typed-actions';
import { DropdownXState } from './dropdown-x.types';
import { DropdownXItem } from '../dropdown-x.types';
import {
  DropdownXLoadAction,
  DropdownXLoadSuccessAction,
  DropdownXSelectAction,
} from './dropdown-x.actions';

export const InitialState: DropdownXState<DropdownXItem> = {
  enable: true,
  items: [],
  loading: false,
  selectedValue: false,
};

export function reducer(state: DropdownXState<DropdownXItem> = InitialState, action: PlainAction): DropdownXState<DropdownXItem> {
  if (DropdownXLoadAction.is(action)) {
    return {
      ...state,
      loading: true,
    };

  } else if (DropdownXLoadSuccessAction.is(action)) {
    return {
      ...state,
      loading: false,
      items: action.payload,
    };

  } else if (DropdownXSelectAction.is(action)) {
    return {
      ...state,
      selectedValue: action.payload,
    };

  } else {
    return state;
  }
}
