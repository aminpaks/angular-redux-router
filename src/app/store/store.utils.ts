/**
 * @license ActionCreator
 * (c) 2017 Amin Paks <amin.pakseresht@hotmail.com>
 * License: MIT
 */

import 'rxjs/add/observable/of';
import { Action as SimpleAction } from 'redux';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from './store.types';

export type Dispatch<A> = (action: A) => A;
export type Middleware<S, A> = (store: NgRedux<S>) => (dispatch: Dispatch<A>) => Dispatch<A>;

export interface ActionCreator<Payload> {
  new (payload?: Payload, error?: boolean): Action<Payload>;
  type: string;
  parse: (action: PlainAction<Payload>) => Action<Payload>;
}

export interface Action<Payload = any> extends PlainAction<Payload> {
  type: string;
  error: boolean;
  payload: Payload;
  toPlain: () => PlainAction<Payload>;
  asObservable: () => Observable<PlainAction<Payload>>;
}

export interface PlainAction<Payload = any> extends SimpleAction {
  type: string;
  error: boolean;
  payload: Payload;
}

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
  const actionGenerator = new Function(`
    return function ${safeClassName}(payload, error) {
      this.type = "${actionType}";
      this.payload = payload == void 0 ? undefined : payload;
      this.error = error == void 0 ? false : true;
    };
  `); // `;
  const action: any = actionGenerator();
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
