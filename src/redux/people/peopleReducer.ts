import { createReducer } from "typesafe-actions";
import { peopleActions } from "./peopleActions";

export interface PeopleState {
  people: string[];
  isLoading: boolean;
  error?: string;
}

const initialState: PeopleState = {
  people: [],
  isLoading: false,
  error: undefined
};

export const peopleReducer = createReducer<PeopleState>(initialState)
  .handleAction(peopleActions.loadPeople.request, state => ({
    ...state,
    isLoading: true
  }))
  .handleAction(peopleActions.loadPeople.success, (state, action) => ({
    ...state,
    isLoading: false,
    people: action.payload.people
  }))
  .handleAction(peopleActions.loadPeople.failure, (state, action) => ({
    ...state,
    error: action.payload.error
  }));
