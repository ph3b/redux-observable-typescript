import { configureStore } from "./redux/store";
const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "LOAD_PEOPLE" });
store.dispatch({ type: "DOG_REQUEST" });
