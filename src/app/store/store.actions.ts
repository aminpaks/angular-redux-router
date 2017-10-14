import { defineAction } from 'redux-typed-actions';

export const AppLoadAction = defineAction('[Root App] Load');
export const AppLoadFailedAction = defineAction<string>('[Root App] Load Failed');
export const AppLoadSuccessAction = defineAction('[Root App] Load Success');
