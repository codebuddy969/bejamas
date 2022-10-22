import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {
    IApiRequestParams,
    IApiRequestCategories,
    IApiRequestRange,
} from "@/utilities/interfaces/filterParams.interface";

const initialState: IApiRequestParams = {
    categories: [],
    sorting: "price",
    range: [],
    order: "desc",
    page: 1,
    touched: false,
};

export const apiRequestSlice = createSlice({
    name: "apiRequest",
    initialState,
    reducers: {
        api_categories: (
            state,
            action: PayloadAction<IApiRequestCategories>
        ) => {
            state.touched = true;

            let categories: String[] = state.categories;

            if (
                state.categories.includes(action.payload.id) &&
                !action.payload.status
            ) {
                categories = state.categories.filter(
                    (id) => id !== action.payload.id
                );
            }

            if (
                !state.categories.includes(action.payload.id) &&
                action.payload.status
            ) {
                categories = [...state.categories, action.payload.id];
            }

            state.categories = categories;
            state.page = 1;
        },
        api_sorting: (state, action: PayloadAction<String>) => {
            state.touched = true;
            state.sorting = action.payload;
            state.page = 1;
        },
        api_range: (state, action: PayloadAction<IApiRequestRange>) => {
            state.touched = true;

            let range: String[] = state.range;

            if (
                state.range.includes(action.payload.id) &&
                !action.payload.status
            ) {
                range = state.range.filter((id) => id !== action.payload.id);
            }

            if (
                !state.range.includes(action.payload.id) &&
                action.payload.status
            ) {
                range = [...state.range, action.payload.id];
            }

            state.range = range;
            state.page = 1;
        },
        api_order: (state, action: PayloadAction<String>) => {
            state.touched = true;
            state.order = action.payload;
            state.page = 1;
        },
        api_pagination: (state, action: PayloadAction<Number>) => {
            state.touched = true;
            state.page = action.payload;
        },
    },
});

export const {
    api_categories,
    api_sorting,
    api_range,
    api_order,
    api_pagination,
} = apiRequestSlice.actions;
