import { DropdownXState, DropdownXItem } from 'app/feature-x/dropdown-x/store/dropdown-x.types';

export interface FeatureXState {
  dropdownX: DropdownXState<DropdownXItem>;
}
