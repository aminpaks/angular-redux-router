export interface DropdownXItem {
  title: string;
  value: string;
  url: string;
}

export interface DropdownXState<T extends DropdownXItem> {
  items: T[];
  selectedValue: T | false;
  loading: boolean;
  enable: boolean;
}
