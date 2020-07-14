import { combineReducers } from 'redux';
import auth from './auth/reducer';
import programmer from './programmer/reducer';
import dog from './tinderForDogs/reducer';
import { ProgrammerState } from './programmer/types';
import { AuthState } from './auth/types';
import { TinderDogState } from './tinderForDogs/types';

export interface AppState {
  auth: AuthState;
  programmer: ProgrammerState;
  dog: TinderDogState
}

const rootReducer = combineReducers<AppState>({
  auth,
  programmer,
  dog
});

export default rootReducer;
