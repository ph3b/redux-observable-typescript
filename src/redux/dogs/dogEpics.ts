import { Epic } from "redux-observable";
import { DogActions, dogActions } from "./dogActions";
import { filter, switchMap, map, catchError } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { from, of } from "rxjs";
import { getDogs } from "./dogApi";
import { DogState } from "./dogReducer";

export const loadDogsEpic: Epic<DogActions, DogActions, DogState> = action$ =>
  action$.pipe(
    filter(isActionOf(dogActions.getDogs.request)),
    switchMap(() => from(getDogs())),
    map(action => dogActions.getDogs.success(action)),
    catchError(error =>
      of(dogActions.getDogs.failure({ error: error.message }))
    )
  );
