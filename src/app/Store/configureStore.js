import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools"
import rootReducer from "../Reducers/RootReducer";

export const configureStore = () => {
  const store = createStore(rootReducer, devToolsEnhancer());
  return store;
};
