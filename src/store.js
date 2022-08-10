import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import listReducer from "./reducers/pokemons";

const middleware = applyMiddleware(thunk, createLogger());
// const middleware = applyMiddleware(thunk);
const store = createStore(listReducer, middleware);

export default store;
