import { TinderDog, DogActionTypes } from './types';

export const addDog = (dog: TinderDog) => {
  return {
    type: DogActionTypes.ADD_DOG,
    payload: dog
  }
};
