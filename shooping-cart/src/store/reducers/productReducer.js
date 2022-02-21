import { ADD_TO_CART, GET_PRODUCT } from "../constants";

const initialState = {
  products: [],
  product: {},
  carts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      const carts = state.carts;
      const findProduct = state.products.find(
        (val) => val.id === action.payload
      );
      if (findProduct) carts.push({ ...findProduct, qty: 1 });

      return {
        ...state,
        carts,
      };

    default:
      return state;
  }
};

export default productReducer;
