import { Injectable } from '@angular/core';
import { PlainAction } from 'redux-typed-actions';
import { Observable } from 'rxjs/Observable';
import { createEpicMiddleware, combineEpics, EpicMiddleware, Epic } from 'redux-observable';

import { AppState } from 'app/store/store.types';
import { DropdownXService } from './dropdown-x.service';
import {
  DropdownXLoadAction,
  DropdownXLoadFailedAction,
  DropdownXLoadSuccessAction,
} from './dropdown-x.actions';
import {
  DropdownXMoveToAction,
  DropdownXMoveToFailedAction,
  DropdownXMoveToSuccessAction,
} from 'app/shared/dropdown-x/store/dropdown-x.actions';

@Injectable()
export class DropdownXEpics {

  constructor(private service: DropdownXService) { }

  public createEpic(): EpicMiddleware<PlainAction, AppState> {
    return createEpicMiddleware(combineEpics(
      this.loadEpic(),
      this.moveToEpic(),
    ));
  }

  private loadEpic(): Epic<PlainAction, AppState> {
    return (action$, _store) => action$
      .ofType(DropdownXLoadAction.type)
      .switchMap((action) =>
        this.service.getRepositories()
          .map(repos => DropdownXService.transformToItem(repos))
          .delay(2000)
          .map(repos => DropdownXLoadSuccessAction.strictGet(repos, action.meta))
          .catch(() => Observable.of(DropdownXLoadFailedAction.strictGet('Oops', action.meta))));
  }

  private moveToEpic(): Epic<PlainAction, AppState> {
    return (action$, _store) => action$
      .ofType(DropdownXMoveToAction.type)
      .map((action) => {
        console.log('Here we should call the router to go to Feature Y :)');
        return DropdownXMoveToSuccessAction.get(undefined, action.meta);
      })
      .catch(error => Observable.of(DropdownXMoveToFailedAction.strictGet(error)));
  }
}
