import { createSlice } from "@reduxjs/toolkit";

const FoodCart = createSlice({
  name: "FoodCart",
  initialState: {
    items: [],
    restaurant: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    addRestaurant: (state, action) => {
      state.restaurant.push(action.payload);
    },
    removeRestaurant: (state) => {
      state.restaurant.pop();
    },
  },
});

export const { addRestaurant, removeRestaurant, addItems, removeItem } =
  FoodCart.actions;

export default FoodCart.reducer;
