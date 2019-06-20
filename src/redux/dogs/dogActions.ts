import { createAsyncAction, ActionType } from "typesafe-actions";

export const dogActions = {
  getDogs: createAsyncAction(
    "DOG_REQUEST",
    "DOG_REQUEST_SUCCESS",
    "DOG_REQUEST_ERROR"
  )<undefined, { dogs: string[] }, { error: string }>()
};

export type DogActions = ActionType<typeof dogActions>;
