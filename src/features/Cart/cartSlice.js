import { createSlice } from "@reduxjs/toolkit";
import orderApi from "../../api/orderApi";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },

    hideMiniCart(state) {
      state.hideMiniCart = false;
    },

    checkout(state, action) {
      const newOrders = action.payload;
      try {
        (async () => {
          const createOrder = await orderApi.add(newOrders);
        })();
      } catch (error) {}
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    addToCart(state, action) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);

      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);

      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
    },

    decreaseCart(state, action) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);

      if (index >= 0) {
        state.cartItems[index].quantity -= 1;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    increaseCart(state, action) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);

      if (index >= 0) {
        state.cartItems[index].quantity += 1;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  showMiniCart,
  hideMiniCart,
  checkout,
  removeCart,
  addToCart,
  setQuantity,
  removeFromCart,
  decreaseCart,
  increaseCart,
} = actions;
export default reducer;
