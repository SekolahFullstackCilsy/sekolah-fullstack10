import * as actions from '../actions/cartActions'

const initialState = {
   cart: 0
}

const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case actions.ADDCART:
         return {
            ...state,
            cart: state.cart + 1
         }
      case actions.REMOVECART:
         return {
            ...state,
            cart: state.cart - 1
         }
      default:
         return state;
   }
}

export default cartReducer;