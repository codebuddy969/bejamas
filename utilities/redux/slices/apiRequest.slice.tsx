import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IApiRequestParams, IApiRequestCategories, IApiRequestRange, IApiRequestSorting } from '@/utilities/interfaces/filterParams.interface';
  
const initialState: IApiRequestParams = {
    categories: [],
    sorting: "",
    range: [],
    order: "",
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

        console.log("Categories", action.payload, state.categories);
      },
      api_sorting: (state , action: PayloadAction<String>) => {
        state.sorting = action.payload;

        console.log("Sorting", state.sorting);
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

        console.log("Range", action.payload, state.range);
      },
      api_order: (state) => {
        state.order = "";
      }
    },
})

export const { api_categories, api_sorting, api_range, api_order } = apiRequestSlice.actions;