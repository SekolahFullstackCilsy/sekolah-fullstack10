import { createStore, combineReducers } from "redux"
import counterReducer from "./reducers/counterReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
   counterReducer: counterReducer,
   cartReducer: cartReducer
})

const store = createStore(rootReducer);
export default store;