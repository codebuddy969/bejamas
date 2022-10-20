import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICartProduct, ICartParameters } from '@/utilities/interfaces/addToCart.interface';
  
const initialState: ICartProduct = {
    id: null,
    value: 0,
    name: "",
    price: 0,
    image: ""
}

export const cartProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      add: (state, action: PayloadAction<ICartParameters>) => {
        state.value = action.payload.value ? action.payload.value : state.value + 1;
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.price = action.payload.price;
        state.image = action.payload.image;
      },
      clear: (state) => {
        state.value = 0;
      }
    },
})

export const { add, clear } = cartProductSlice.actions;