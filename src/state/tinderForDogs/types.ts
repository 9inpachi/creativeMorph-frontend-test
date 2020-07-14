export interface TinderDog {
  photoLink: string,
  liked?: boolean
}

export interface TinderDogState {
  tinderDogs: TinderDog[]
}

export enum DogActionTypes {
  ADD_DOG = 'ADD_DOG',
  GET_DOGS = 'GET_DOGS'
}