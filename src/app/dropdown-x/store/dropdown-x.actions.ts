import { defineAction } from 'redux-typed-actions';
import { DropdownXItem } from '../dropdown-x.types';

export const DropdownXLoadAction = defineAction('[Dropdown X] Load Started');
export const DropdownXLoadSuccessAction = defineAction<DropdownXItem[]>('[Dropdown X] Load Success');
export const DropdownXLoadFailedAction = defineAction<string>('[Dropdown X] Load Failed');
export const DropdownXSelectAction = defineAction<DropdownXItem | false>('[Dropdown X] Select');

export const DropdownXMoveToAction = defineAction<DropdownXItem>('[Dropdown X] MoveTo Started');
export const DropdownXMoveToFailedAction = defineAction<string>('[Dropdown X] MoveTo Failed');
export const DropdownXMoveToSuccessAction = defineAction('[Dropdown X] MoveTo Success');
