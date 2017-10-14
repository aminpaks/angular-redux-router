import { defineAction } from 'redux-typed-actions';

import { DropdownXItem } from './dropdown-x.types';

export const DropdownXLoadAction = defineAction('[Dropdown X] Load Started');
export const DropdownXLoadSuccessAction = defineAction<DropdownXItem[]>('[Dropdown X] Load Success');
export const DropdownXLoadFailedAction = defineAction<string>('[Dropdown X] Load Failed');
export const DropdownXSelectAction = defineAction<DropdownXItem | false>('[Dropdown X] Select');
export const FeatureXMoveToAction = defineAction<string>('[Feature X] MoveTo Started');
export const FeatureXMoveToFailedAction = defineAction<string>('[Feature X] MoveTo Failed');
export const FeatureXMoveToSuccessAction = defineAction('[Feature X] MoveTo Success');
