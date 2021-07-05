import pokemonReducer from "./reducer/pokemonReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(pokemonReducer, applyMiddleware(thunk));

export default store;
