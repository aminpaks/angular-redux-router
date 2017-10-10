import { combineReducers } from 'redux';
import { Action } from 'app/store';
import { FeatureXState } from './feature-x.types';
import { InitialState as ComponentsInitialState, reducer as componentsReducer } from 'app/feature-x/components';

export const InitialState: FeatureXState = {
  components: ComponentsInitialState,
};

export const reducer = combineReducers<FeatureXState>({
  components: componentsReducer,
});
