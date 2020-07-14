import { TinderDogState, DogActionTypes } from './types';

const defaultState: TinderDogState = {
  tinderDogs: []
};

export default function dog(state = defaultState, action: any) {
  switch (action.type) {
    case DogActionTypes.ADD_DOG:
      return {
        tinderDogs: [...state.tinderDogs, action.payload]
      }
    case DogActionTypes.GET_DOGS:
      return state;
    default:
      return state;
  }
}
