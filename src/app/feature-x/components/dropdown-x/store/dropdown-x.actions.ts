import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { actionCreator } from 'app/store/store.utils';

import { DropdownXItem } from './dropdown-x.types';
import { GithubRepository } from './dropdown-x.service';

export const DropdownXLoadAction = actionCreator('[Dropdown X] Load Started');
export const DropdownXLoadSuccessAction = actionCreator<DropdownXItem[]>('[Dropdown X] Load Success');
export const DropdownXLoadFailedAction = actionCreator<Error>('[Dropdown X] Load Failed');
export const DropdownXSelectAction = actionCreator<DropdownXItem | false>('[Dropdown X] Select');
