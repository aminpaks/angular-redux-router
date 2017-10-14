export interface RootState {
  initializing: boolean;
  ready: boolean;
}

export interface AppState {
  root: RootState;
}
