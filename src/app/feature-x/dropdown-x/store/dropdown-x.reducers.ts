import { AppState, Action } from 'app/store';
import { DropdownXState, DropdownXItem } from './dropdown-x.types';
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

export function reducer(state: DropdownXState<DropdownXItem> = InitialState, action: Action): DropdownXState<DropdownXItem> {
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
