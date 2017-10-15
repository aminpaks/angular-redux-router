import { AppState as MainAppState } from 'app/store/store.types';
import { DropdownXState } from 'app/dropdown-x/store/dropdown-x.types';
import { DropdownXItem } from 'app/dropdown-x/dropdown-x.types';

export interface FeatureXState {
  dropdownX: DropdownXState<DropdownXItem>;
}

export interface AppState extends MainAppState {
  featureX: FeatureXState;
}
