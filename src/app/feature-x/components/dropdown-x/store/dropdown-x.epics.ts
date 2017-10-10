import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { createEpicMiddleware, combineEpics, EpicMiddleware, Epic } from 'redux-observable';

import { AppState, PlainAction } from 'app/store';
import { StoreService } from 'app/store/store.service';
import { DropdownXItem } from './dropdown-x.types';
import { DropdownXService } from './dropdown-x.service';
import {
  DropdownXLoadAction,
  DropdownXLoadFailedAction,
  DropdownXLoadSuccessAction,
  DropdownXSelectAction,
} from './dropdown-x.actions';

@Injectable()
export class DropdownXEpics {

  constructor(private service: DropdownXService) { }

  public createEpic(): EpicMiddleware<PlainAction, AppState> {
    return createEpicMiddleware(combineEpics(
      this.loadEpic(),
    ));
  }

  private loadEpic(): Epic<PlainAction, AppState> {
    return (action$, store) => action$
      .ofType(DropdownXLoadAction.type)
      .switchMap(() =>
        this.service.getRepositories()
          .map(repos => DropdownXService.transformToItem(repos))
          .delay(2000)
          .map(repos => new DropdownXLoadSuccessAction(repos).toPlain())
          .catch(() => new DropdownXLoadFailedAction(new Error('Oops')).asObservable()));
  }
}
