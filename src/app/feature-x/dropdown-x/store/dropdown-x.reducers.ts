import { AppState, PlainAction } from 'app/store';
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

export function reducer(state: DropdownXState<DropdownXItem> = InitialState, action: PlainAction): DropdownXState<DropdownXItem> {
  switch (action.type) {
    case DropdownXLoadAction.type:
      return {
        ...state,
        loading: true,
      };

    case DropdownXLoadSuccessAction.type:
      return {
        ...state,
        loading: false,
        items: DropdownXLoadSuccessAction.parse(action).payload,
      };

    case DropdownXSelectAction.type:
      return {
        ...state,
        selectedValue: DropdownXSelectAction.parse(action).payload,
      };

    default:
      return state;
  }
}
