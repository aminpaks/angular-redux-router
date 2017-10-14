import { PlainAction } from 'redux-typed-actions';

import { RootState } from './store.types';
import { AppLoadAction, AppLoadFailedAction, AppLoadSuccessAction } from './store.actions';

const InitialState: RootState = {
  initializing: false,
  ready: false,
};

export function rootReducer(state: RootState = InitialState, action: PlainAction): RootState {
  if (AppLoadAction.is(action)) {
    return {
      ...state,
      initializing: true,
    };

  } else if (AppLoadFailedAction.is(action)) {
    return {
      ...state,
      initializing: false,
      ready: false,
    };

  } else if (AppLoadSuccessAction.is(action)) {
    return {
      ...state,
      initializing: false,
      ready: true,
    };

  } else {
    return state;
  }
}
