import { Epic } from "redux-observable";
import { PeopleActions, peopleActions } from "./peopleActions";
import { PeopleState } from "./peopleReducer";
import { isActionOf } from "typesafe-actions";
import { filter, switchMap, map, catchError } from "rxjs/operators";
import { from, of } from "rxjs";
import { getPeople } from "./peopleApi";

export const loadPeopleEpic: Epic<
  PeopleActions,
  PeopleActions,
  PeopleState
> = action$ =>
  action$.pipe(
    filter(isActionOf(peopleActions.loadPeople.request)),
    switchMap(() => from(getPeople())),
    map(action => peopleActions.loadPeople.success(action)),
    catchError(error =>
      of(peopleActions.loadPeople.failure({ error: error.message }))
    )
  );
