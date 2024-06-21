import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) ?? [],
  status: "",
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {

      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
      }

    },
    removeFromCart(state, action) {
      const updatedCart = state.cart.filter((p) => p.id !== action.payload.id);
      state.cart = updatedCart;
     
    },
   
  },
});

export const {
  addToCart,
  removeFromCart,
} = CartSlice.actions;

export default CartSlice.reducer;