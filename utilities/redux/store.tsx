import { configureStore } from '@reduxjs/toolkit';

import { apiRequestSlice } from './slices/apiRequest.slice';
import { cartProductSlice } from './slices/addToCart.slice';
import { serverApi } from './services/api.service';

export const store = configureStore({ reducer: {
    [apiRequestSlice.name]: apiRequestSlice.reducer,
    [cartProductSlice.name]: cartProductSlice.reducer,
    [serverApi.reducerPath]: serverApi.reducer,
} })

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch