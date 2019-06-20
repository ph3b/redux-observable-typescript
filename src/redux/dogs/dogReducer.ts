import { createReducer } from "typesafe-actions";
import { dogActions, DogActions } from "./dogActions";

export interface DogState {
  dogs: string[];
  isLoading: boolean;
  error?: string;
}

const initialState = {
  dogs: [],
  isLoading: false,
  error: undefined
};

export const dogReducer = createReducer<DogState, DogActions>(initialState)
  .handleAction(dogActions.getDogs.request, state => ({
    ...state,
    isLoading: true
  }))
  .handleAction(dogActions.getDogs.success, (state, action) => ({
    ...state,
    dogs: action.payload.dogs
  }))
  .handleAction(dogActions.getDogs.failure, (state, action) => ({
    ...state,
    error: action.payload.error
  }));
