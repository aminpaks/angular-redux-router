import { AppState as MainAppState } from 'app/store/store.types';
import { DropdownXState } from 'app/dropdown-x/store/dropdown-x.types';
import { DropdownXItem } from 'app/dropdown-x/dropdown-x.types';

export interface FeatureYState {
  dropdownX: DropdownXState<DropdownXItem>;
}

export interface AppState extends MainAppState {
  featureY: FeatureYState;
}
