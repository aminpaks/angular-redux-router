import { Injectable } from '@angular/core';
import { PlainAction } from 'redux-typed-actions';
import { Observable } from 'rxjs/Observable';
import { createEpicMiddleware, combineEpics, EpicMiddleware, Epic } from 'redux-observable';

import { AppState } from 'app/feature-x';
import { DropdownXService } from './dropdown-x.service';
import {
  DropdownXLoadAction,
  DropdownXLoadFailedAction,
  DropdownXLoadSuccessAction,
  FeatureXMoveToAction,
  FeatureXMoveToFailedAction,
  FeatureXMoveToSuccessAction,
} from './dropdown-x.actions';

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
      .startWith(DropdownXLoadAction.get())
      .switchMap(() =>
        this.service.getRepositories()
          .map(repos => DropdownXService.transformToItem(repos))
          .delay(2000)
          .map(repos => DropdownXLoadSuccessAction.strictGet(repos))
          .catch(() => Observable.of(DropdownXLoadFailedAction.strictGet('Oops'))));
  }

  private moveToEpic(): Epic<PlainAction, AppState> {
    return (action$, _store) => action$
      .ofType(FeatureXMoveToAction.type)
      .map(() => {
        console.log('Here we should call the router to go to Feature Y :)');
        return FeatureXMoveToSuccessAction.get();
      })
      .catch(error => Observable.of(FeatureXMoveToFailedAction.strictGet(error)));
  }
}
