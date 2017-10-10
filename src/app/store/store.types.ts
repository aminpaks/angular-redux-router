import { Action as SimpleAction } from 'redux';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { FeatureXState } from 'app/feature-x/store';

export interface AppState {
  featureX: FeatureXState;
}
