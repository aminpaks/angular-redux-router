import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { EpicMiddleware } from 'redux-observable';

import { AppState, Action } from './store.types';

@Injectable()
export class StoreService {
  private epics: any[] = [];

  getAllEpics(): EpicMiddleware<Action, AppState>[] {
    return this.epics;
  }

  registerEpic(epic: any): void {
    this.epics.push(epic);
  }
}
