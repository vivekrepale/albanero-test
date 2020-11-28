import { combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import home from "./components/home/reducer.js";
import graph from "./components/graph/reducer.js";

const rootReducer = combineReducers({ home, graph });

const store = createStore(rootReducer, {}, composeWithDevTools());

export default store;
