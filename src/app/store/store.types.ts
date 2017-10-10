import { Action as SimpleAction } from 'redux';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { FeatureXState } from 'app/feature-x/store';

export interface AppState {
  featureX: FeatureXState;
}

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

export type Dispatch<A> = (action: A) => A;
export type Middleware<S, A> = (store: NgRedux<S>) => (dispatch: Dispatch<A>) => Dispatch<A>;
