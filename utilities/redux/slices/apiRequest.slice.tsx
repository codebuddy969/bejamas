import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IApiRequestParams, IApiRequestCategories, IApiRequestRange } from '@/utilities/interfaces/filterParams.interface';
  
const initialState: IApiRequestParams = {
    categories: [],
    sorting: "price",
    range: [],
    order: "desc",
}

export const apiRequestSlice = createSlice({
    name: 'apiRequest',
    initialState,
    reducers: {
      api_categories: (state, action: PayloadAction<IApiRequestCategories>) => {
        let categories: String[] = state.categories;

        if (state.categories.includes(action.payload.id) && !action.payload.status) {
          categories = state.categories.filter(id => id !== action.payload.id);
        } 

        if (!state.categories.includes(action.payload.id) && action.payload.status) {
          categories = [...state.categories, action.payload.id];
        }

        state.categories = categories;
      },
      api_sorting: (state , action: PayloadAction<String>) => {
        state.sorting = action.payload;
      },
      api_range: (state, action: PayloadAction<IApiRequestRange>) => {

        let range: String[] = state.range;

        if (state.range.includes(action.payload.id) && !action.payload.status) {
          range = state.range.filter(id => id !== action.payload.id);
        } 

        if (!state.range.includes(action.payload.id) && action.payload.status) {
          range = [...state.range, action.payload.id];
        }

        state.range = range;
      },
      api_order: (state, action: PayloadAction<String>) => {
        state.order = action.payload;
      }
    },
})

export const { api_categories, api_sorting, api_range, api_order } = apiRequestSlice.actions;