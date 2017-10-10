import 'rxjs/add/observable/of';
import { Action as SimpleAction } from 'redux';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { AppState, Middleware, ActionCreator, Action, PlainAction } from './store.types';

/**
 * A simple solution to turn an enriched action to a simple plain action
 */
export const convertActionMiddleware: Middleware<AppState, SimpleAction> = store => dispatch => action => {
  let simpleAction: SimpleAction;
  if (isHigherOrderAction(action)) {
    simpleAction = action.toPlain();
  } else {
    simpleAction = { ...action };
  }
  return dispatch(simpleAction);
};

export function actionCreator<Payload = undefined>(actionType: string): ActionCreator<Payload> {
  const safeClassName = getSafeClassName(actionType);
  const actionGenerator = Function(safeClassName, `
    return function ${safeClassName}(payload, error) {
      this.type = "${actionType}";
      this.payload = payload == void 0 ? undefined : payload;
      this.error = error == void 0 ? false : true;
    };
  `); // `;
  const action = actionGenerator();
  action.type = actionType;
  action.parse = function (simple: PlainAction<Payload>) {
    return new action(simple.payload, simple.error);
  };
  action.prototype.toPlain = function () {
    return { type: this.type, payload: this.payload, error: this.error };
  };
  action.prototype.asObservable = function () {
    return Observable.of(this.toPlain());
  };
  return action;
}

function getSafeClassName(input: string): string {
  return input.toString().replace(/\W/g, '');
}

function isHigherOrderAction(action: any): action is Action {
  return typeof action['toPlain'] === 'function';
}
