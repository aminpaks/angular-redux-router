import { defineAction } from 'redux-typed-actions';
import { DropdownXItem } from 'app/dropdown-x/dropdown-x.types';

export const DropdownXMoveToAction = defineAction<DropdownXItem>('[Dropdown X] MoveTo Started');
export const DropdownXMoveToFailedAction = defineAction<string>('[Dropdown X] MoveTo Failed');
export const DropdownXMoveToSuccessAction = defineAction('[Dropdown X] MoveTo Success');
