import { legacy_createStore as createStore } from "redux";
import bugReducer from "./reducer";

const store = createStore(bugReducer);

export default store;
