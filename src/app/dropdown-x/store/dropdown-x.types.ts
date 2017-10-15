import { DropdownXItem } from '../dropdown-x.types';

export interface DropdownXState<T extends DropdownXItem> {
  items: T[];
  selectedValue: T | false;
  loading: boolean;
  enable: boolean;
}
