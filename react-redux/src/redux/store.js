import { createStore } from "redux"

const initialState = {
   counter: 0
}

const rootReducer = (state = initialState, action) => {
   if (action.type === "INCREMENT") {
      return {
         ...state,
         counter: state.counter + 1
      }
   }

   if (action.type === "DECREMENT") {
      return {
         ...state,
         counter: state.counter - 1
      }
   }

   return state;
}

const store = createStore(rootReducer);
export default store;