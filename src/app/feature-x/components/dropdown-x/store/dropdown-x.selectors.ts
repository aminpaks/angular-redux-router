import { AppState, PlainAction } from 'app/store';
import { DropdownXState, DropdownXItem } from './dropdown-x.types';

export function dropdownXSelector(state: AppState): DropdownXState<DropdownXItem> {
  return state.featureX.components.dropdownX;
}

export function dropdownXItemsSelector(state: AppState): DropdownXItem[] {
  return dropdownXSelector(state).items;
}

export function dropdownXItemsLoadingSelector(state: AppState): boolean {
  return dropdownXSelector(state).loading;
}

export function dropdownXSelectedValueSelector(state: AppState): DropdownXItem | false {
  return dropdownXSelector(state).selectedValue;
}
