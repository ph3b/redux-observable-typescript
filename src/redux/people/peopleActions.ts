import { ActionType, createAsyncAction } from "typesafe-actions";

export const peopleActions = {
  loadPeople: createAsyncAction(
    "LOAD_PEOPLE",
    "LOAD_PEOPLE_SUCCESS",
    "LOAD_PEOPLE_ERROR"
  )<undefined, { people: string[] }, { error: string }>(),
  getPerson: createAsyncAction(
    "GET_PERSON",
    "GET_PERSON_SUCCESS",
    "GET_PERSON_ERROR"
  )<undefined, string, string>()
};

export type PeopleActions = ActionType<typeof peopleActions>;
