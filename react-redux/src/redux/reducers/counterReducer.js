import * as actions from '../actions/counterActions'

const initialState = {
   counter: 0
}

const counterReducer = (state = initialState, action) => {
   switch (action.type) {
      case actions.INCREMENT:
         return {
            ...state,
            counter: state.counter + 1
         }
      case actions.DECREMENT:
         return {
            ...state,
            counter: state.counter - 1
         }
      default:
         return state;
   }
}

export default counterReducer;