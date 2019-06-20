import { createStore, applyMiddleware, combineReducers } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { peopleReducer } from "./people/peopleReducer";
import { loadPeopleEpic } from "./people/peopleEpics";
import { dogReducer } from "./dogs/dogReducer";
import { loadDogsEpic } from "./dogs/dogEpics";

// ACTIONS
import { PeopleActions } from "./people/peopleActions";
import { DogActions } from "./dogs/dogActions";

export type RootActions = PeopleActions | DogActions;

// REDUCERS
const rootReducer = combineReducers({
  dogs: dogReducer,
  people: peopleReducer
});

type RootState = ReturnType<typeof rootReducer>;

// EPICS
const rootEpic = combineEpics(loadPeopleEpic, loadDogsEpic);
const epicMiddleware = createEpicMiddleware<
  RootActions,
  RootActions,
  RootState
>();

export const configureStore = () => {
  const store = createStore<RootState, RootActions, {}, {}>(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );
  epicMiddleware.run(rootEpic);
  return store;
};
